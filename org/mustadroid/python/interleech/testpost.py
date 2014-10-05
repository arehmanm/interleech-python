import urllib2
from poster.encode import multipart_encode
from poster.streaminghttp import register_openers
from urllib import urlopen

def testPost():
    url = "https://fast2.stangastaden.se/index.php?page=sok_ledigt&qsok_ledigtunnamed1=aHR0cDovL2xvY2FsaG9zdDo4MDgwL0Zhc3RQb3J0YWxTdGFuZ2EvcGFnZXMvbWFya25hZC9fcHVibGljL29iamVjdF9zZWFyY2hsaXN0LmpzZg%3D%3D"
    data = dict()
    data['refid'] =  "60808"
    data['_id49%3A_idcl'] = "_id49%3AdtLediga%3A0%3Adetalj"
    data['_id49_SUBMIT'] = "1"
    data['javax.faces.ViewState'] = "rO0ABXVyABNbTGphdmEubGFuZy5PYmplY3Q7kM5YnxBzKWwCAAB4cAAAAAN0AAEycHQALi9wYWdlcy9tYXJrbmFkL19wdWJsaWMvb2JqZWN0X3NlYXJjaGxpc3QueGh0bWw%3D"
    print data
    #data = urllib.urlencode(data)
    
    register_openers()
    data, headers = multipart_encode(data)
    print headers
    headers['Content-Type'] = "application/x-www-form-urlencoded"
    headers['User-Agent'] = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36'
    request = urllib2.Request(url, data, headers)
    request.unverifiable = True
    response = urllib2.urlopen(request)
    text = response.read()
    
    #text = urllib2.urlopen(url, data).read()
    #print text
    htmlFile = open("/home/mustafa/projects/python/interleech/resources/testfile.html", "w")
    htmlFile.write(text)
    htmlFile.close()
    return

def testGet():
    url = urlopen("http://victoriaparkv2.capitex.se/data/CBild/46SJHCT5/JM9GJO0G_q70_h300_w600_mFile_cmFitAndClip.jpg")
    print url.url

if __name__ == "__main__":
    #testPost()
    testGet()