from bs4 import BeautifulSoup as bs
from urllib2 import urlopen
import bs4.element
from org.mustadroid.python.interleech.item import Item
from compiler.ast import flatten
import re
from bs4.element import NavigableString
import urllib
import time
from org.mustadroid.python.interleech.translate import translateText

attrList = set()
dbHintsDict = dict()
tableName = ""
abortProcessing = False
base = ""
xmlBase = ""
timeStamp = int(time.time() * 100)
nextURL = []
globalURL = ""

'''
    Given the list of existing objects and the data class
    Decide whether to reuse or create a new object
'''
def getItem(dataList, dataClass):
    global abortProcessing
    if len(dataList) > 0:
        item = dataList[len(dataList)-1]
    else:
        print "Adding new item..."
        '''
        if len(dataList) > 0:
            if dataList[len(dataList) - 1].Save(tableName, attrList, timeStamp - (len(dataList) - 1)) == False:
                print "Aborting"
                abortProcessing = True
        #'''
        item = dataClass()
        dataList.append(item)
    return item

'''
    Find out which field and value to set for this item
'''
def setSingleAttr(item, field, value, dataList, dataClass):
    global abortProcessing
    global nextURL
    nextURL = []
    fieldParts = re.compile("[%:?]").split(field)
    # check for database hints
    fieldParts2 = re.compile('%([\w%]+)([\w\s()]*)(.*)').search(field)
    field = fieldParts[1]
    if (fieldParts2.group(1) == "id"):
        results = Item.Check(tableName, value)
        if len(results) > 0:
            print "Id Found! ", results
            abortProcessing = True
            #return (item, field, value, dataList)
        else:
            abortProcessing = False
    
    if fieldParts2:
        field = fieldParts2.group(1)
        field = field.replace("%", "")
        dbHint = fieldParts2.group(2)[1:len(fieldParts2.group(2))-1]
        if len(dbHint.strip()) > 0:
            dbHintsDict[field] = dbHint
        
    # if we have a link
    if len(fieldParts) > 2 and len(fieldParts[2]) > 0:
        url = value
        #print url
        
        xmlFile = xmlBase + fieldParts[2]
        #print xmlFile
        # link URL has parameters
        urlParameters = None
        if len(fieldParts) > 3 and len(fieldParts[3]) > 0:
            urlParameters = fieldParts[3]
            urlParts = re.compile("[$&]").split(urlParameters)
            for urlPart in urlParts:
                # if parameter already exists, substitute its value
                if hasattr(item, urlPart):
                    urlParameters = urlParameters.replace("$" + urlPart, getattr(item, urlPart))
                    
            #print urlParameters
            
        if urlParameters is not None:
            if url.find("?") > 0:
                url = url + "&" + urlParameters
            else:
                url = url + "?" + urlParameters
        if abortProcessing is False:
            nextURL = [url, xmlFile]
            
    value = value.replace(fieldParts[0], "")
    
    # if field is solo and already filled in, create new data object
    if (len(fieldParts)<=2 or fieldParts[2] != '') and hasattr(item, field) is True and getattr(item, field) is not None:
        print "Adding new item...", fieldParts
        '''
        if len(dataList) > 0:
            if dataList[len(dataList) - 1].Save(tableName, attrList, timeStamp - (len(dataList) - 1)) == False:
                print "Aborting"
                abortProcessing = True
        #'''
        item = dataClass()
        dataList.append(item)
    
    return (item, field, value, dataList)

'''
    Once we have our field and value, set it on the item
'''
def setSingleItemField(item, field, value, dataList, dataClass):
    print "\n*********** Setting " + field + " to " + value + " ***********\n"
    # If value is supposed to be url but is not, make it one
    if field.find("Image") >= 0 or field.find("Link") >=0:
        if value.startswith("/") or value.startswith("./"):
            value = base + value
    
    # if value is a url, get actual link if it redirects
    #'''        
    if value.startswith("http") is True and value.endswith(".jpg") is False:
        testURL = urllib.urlopen(value)
        value = testURL.url
    #'''    
    dataItem = getattr(item, field, None) 
    if dataItem == None:
        #print "Setting " + field + " to " + value
        # new value, simply assign
        item.__setattr__(field, value)
        attrList.add(field)
    elif type(dataItem) is list:
        #print "Appending " + field + " to " + value
        # already a list, simply append
        dataItem.append(value)
    else:
        #print "Changing " + field + " to ", [dataItem, value]
        # value exists, time to create a new list
        item.__setattr__(field, [dataItem, value])
        attrList.add(field)
        
'''
    Set an attribute of the item object given by field
    to the value given. Creates a list if already present
'''
def setAttr(item, field, value, dataList, dataClass):
    #print "field: " + field + ", value: " + value
    global abortProcessing
    global nextURL
    global globalURL
    #if abortProcessing is True:
        #print "Aborting because abortProcess is True..."
        #return
    
    field = field.strip()
    value = value.strip()
    
    regexp = re.compile(r'(%[:.\w%()\s?=$]*)')
    #fieldParts = regexp.findall(field)
    fieldParts = regexp.split(field)
    #print "Field Parts: ", fieldParts
    fieldParts = [x for x in fieldParts if len(x) > 0]
    #print "Field Parts: ", fieldParts
    boringParts = [x for x in fieldParts if x.find("%") < 0 and len(x) > 0]
    boringString = "(" + ")(.*)(".join(boringParts) + ")"
    #print "Boring Parts:", boringParts
    #print "Boring String:", boringString
    valueParts = re.compile(boringString).split(value)
    valueParts = [x for x in valueParts if len(x) > 0]
    #print "Field Parts: ", fieldParts
    #print "Value Parts:", valueParts
    
    if len(fieldParts) == len(valueParts):
        for i in range(0, len(fieldParts)):
            if fieldParts[i].find("%") >= 0:
                (item, field, value, dataList) = setSingleAttr(item, fieldParts[i], valueParts[i], dataList, dataClass)
                if abortProcessing is False:
                    setSingleItemField(item, field, value, dataList, dataClass)
                    if len(nextURL) > 0:
                        url = nextURL[0]
                        print "\n*\n******* Opening url " + nextURL[0] + " with xml file " + nextURL[1] + " **********\n*\n"
                        if url.startswith('/'):
                            url = base + url
                        elif url.startswith('http') is False:
                            url = globalURL + url
                            
                        processPage(url, nextURL[1], dataList, dataClass)
    else:
        print "\n@@@@@@@@@@@@@ Skipping setattr due to length mismatch @@@@@@@@@@@@@@\n"
    
'''
    Find which attributes in tag are data attributes
    Then find corresponding attributes in tagFound
    and substitute tag data attribute fields inside item 
'''
def getTagText(tag, typeList=[NavigableString, bs4.element.Tag]):
    #tagText = "".join(unicode(x) for x in tag.children if type(x) in typeList)
    #if len(tagText.strip()) == 0:
    #    tagText = tag.get_text()
    if type(tag) is NavigableString:
        return unicode(tag)
    else:
        tagText = ""
        if tag.name == 'br':
            tagText += "<br>"
        for child in tag.children:
            tagText += getTagText(child)
        return tagText
    
def fillInDataFields(tag, tagFound, dataList, dataClass):
    fillin = False
    #print "fillInDataFields for tag " + getTagText(tag).strip()[:10] + ": " + tagFound.get_text().strip()[:10]
    # if the tag is to be ignored, mark the corresponding found tag
    if tag.attrs.has_key("interleech:ignore") is True:
        #print "Tagging " + tagFound.get_text().strip()[:10]
        tagFound.__setattr__("tagged", True)
        fillin = True
         
    # first, see if body text is a data field
    if len(tag.contents)==1 and getTagText(tag).find("%") >= 0:
        item = getItem(dataList, dataClass)
        field = getTagText(tag)
        if getTagText(tag).count("%") == 1:
            value = getTagText(tagFound, [NavigableString])
        else:
            value = getTagText(tagFound)
        #'''
        if tag.attrs.has_key("interleech:translate"):
            value = translateText(value)
            value = escape(value)
            value = value.replace("<br>", "\n")
            print "Need to translate " + tag.name + "!"
        #'''
        setAttr(item, field, value, dataList, dataClass)
        
        #print "Tagging " + tagFound.get_text().strip()[:10]
        tagFound.__setattr__("tagged", True)
        fillin = True
        
    # go through attributes and see if they have any data to harvest
    tagDataAttrSet = {x for x in tag.attrs if type(tag[x]) is not list and tag[x].find("%")>=0}
    #if len(tagDataAttrSet) > 0:
    #    print "DataAttrSet: ", tagDataAttrSet
    for dataAttr in tagDataAttrSet:
        item = getItem(dataList, dataClass)
        setAttr(item, tag[dataAttr], tagFound[dataAttr], dataList, dataClass)
        #print "Tagging " + tagFound.get_text().strip()[:10]
        tagFound.__setattr__("tagged", True)
        fillin = True
    
    return fillin

'''
    Go through the attributes for tag and tagFound
    and see if all their non-data attribute values match
    If they do, voila! we have a match.
'''
def checkMatch(tag, tagFound):
    # first, see if body text is a data field
    if len(tag.contents)==1 and getTagText(tag).count("%") == 1:
        if len(getTagText(tagFound).strip()) <= 0:
            #print "Returning FALSE match due to empty tag text"
            return False
        
    # remove data attributes and check rest with found tag to see if match
    tagAttrSet = {x for x in tag.attrs if type(tag[x]) is list or (tag[x].find("%")<0 and x.find("interleech")<0)}
    #print "Tag Attribute Set:", tagAttrSet
    # some attributes have simple values, add them to a set
    tagValueSet = {tag[x] for x in tagAttrSet if type(tag[x]) is not list}
    #print "Tag Value Set:", tagValueSet
    tagFoundValueSet = {tagFound[x] for x in tagAttrSet if type(tagFound[x]) is not list}
    #print "Tag Found Value Set:", tagFoundValueSet
    # other attributes have lists of values, add them to a new list
    # then flatten and add to a set to be compared
    tagValueSet2 = set(flatten([tag[x] for x in tagAttrSet if type(tag[x]) is list]))
    tagFoundValueSet2 = set(flatten([tagFound[x] for x in tagAttrSet if type(tagFound[x]) is list]))
    if tagValueSet == tagFoundValueSet and tagValueSet2 == tagFoundValueSet2:
        #print "MATCH FOUND! ", tagFound.name, " with attrs: ", tagFound.attrs , " with text: ", tagFound.get_text().strip()[:10]
        return True
    
    return False

'''
    Process tag recursively and harvest all data values
    then assign them to the relevant fields in item
'''
def processTag(tag, urlSoup, dataList, dataClass):
    global abortProcessing
    #if abortProcessing is True:
        #print "Aborting because abortProcess is True..."
        #return False
    
    # stop when we encounter a NavigableString
    if type(tag) is not bs4.element.Tag:
        #print "Aborting because element not a tag..."
        #print "NavigableString: ", tag.string.strip()
        return False

    #print "Processing tag: " + tag.name + " with attrs: ", tag.attrs

    # process this tag first before going through children
    tagAttributeSet = set(x for x in tag.attrs if x.find("interleech") < 0)
    tagsFound = urlSoup.findAll(tag.name)
    #print len(tagsFound), " instances of " + tag.name + " found in " + urlSoup.name + "!"

    fillin = False
    for tagFound in tagsFound:
        if hasattr(tagFound, "tagged") is True and getattr(tagFound, "tagged") is True:
            #print "Continuing because " + tagFound.get_text().strip()[:10] + " already tagged..."
            continue
        
        tagFoundAttributeSet = set(tagFound.attrs)
        #print "TagFound Attribute Set:", tagFoundAttributeSet
        # if tagfound has all attributes of tag, we have a suspect
        if tagAttributeSet.issubset(tagFoundAttributeSet):
            # if confirmed match, then harvest data fields
            if checkMatch(tag, tagFound):
                fillin = fillInDataFields(tag, tagFound, dataList, dataClass)
                
                # go through children recursively
                #print "Tag contents: ", tag.contents
                for subTag in tag.children:
                    fillin |= processTag(subTag, tagFound, dataList, dataClass)
                
                if fillin is True and tag.attrs.has_key("interleech:recurse") is True:
                    #print "Finishing because recursion is false"
                    return fillin
    return fillin

def processPage( url, xml, dataList, dataClass):
    global abortProcessing
    global globalURL
    globalURL = url
    try:
        urlSoup = bs(urlopen(url), 'html')
        xmlSoup = bs(urlopen(xml), 'html').html.body
    except:
        return
    
    #print xmlSoup
    #print urlSoup.prettify()
    
    #print xmlSoup.prettify()
    #print xmlSoup.prettify()
    #for tag in xmlSoup.children:
    if abortProcessing is False:
        processTag(xmlSoup, urlSoup, dataList, dataClass)
    '''
    tag = xmlSoup.contents[0]
    print tag.name
    print tag.attrs
    tagsFound = urlSoup.findAll(tag.name)
    print len(tagsFound)
    #print tagsFound
    for tagFound in tagsFound:
    #    print tagFound.name
        if tagFound.has_attr('itemtype') and tagFound['itemtype'] == 'http://schema.org/Offer':
            print tagFound.attrs
    #'''

def escape(html):
    return html.replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>').replace('&quot;', '"').replace('&#39;', "'")

if __name__ == "__main__":
    #url = "file:///home/mustafa/projects/python/interleech/resources/stangastaden.html"
    #url = "file:///home/mustafa/projects/python/interleech/resources/item.html"
    #url = "file:///home/mustafa/projects/python/interleech/resources/viktoriapark.html"
    #url = "file:///home/mustafa/projects/python/interleech/resources/willhem.html"
    #url = "file:///home/mustafa/projects/python/interleech/resources/riksbyggen.html"
    #url = "file:///home/mustafa/projects/python/interleech/resources/liu_item.html"
    tableName = "liu"
    xmlBase = "file:///var/www/html/data/" + tableName + "/"
    xml = "file:///var/www/html/data/" + tableName + "/main.xml"
    #tableName = "blocket2"
    #base = "http://www.willhem.se"
    #base = "http://victoriaparkv2.capitex.se"
    base = "https://www.student.liu.se"
    #url = "http://www.willhem.se/sok-bostad/Linkoping/"
    #url = "http://victoriaparkv2.capitex.se/pages/lagenheter.aspx"
    #url = "https://fast2.stangastaden.se/index.php?page=sok_ledigt"
    #url = "http://www.blocket.se/bostad/uthyres/ostergotland?sort=&ss=&se=&ros=&roe=&bs=&be=&mre=&q=&q=&q=&is=1&l=0&md=th&f=b&m=169"
    #url = "https://ao.riksbyggen.se/IncitXpandWeb187_3/Internet/Bk/VacantResidenceList.aspx"
    url = "https://www.student.liu.se/studenttjanster/anslagstavlan/bostad_linkoping"
    itemList = []
    print "Start processing"
    processPage(url, xml, itemList, Item)
    print len(itemList), "records found!"

    Item.CreateTable(tableName, attrList, dbHintsDict)
    i = 0
    for item in itemList:
        if item.id is not None:
            item.Save(tableName, attrList, timeStamp - i)
        i += 1
        
    #'''
