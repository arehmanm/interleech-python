def getAttribute(tag, attr, name=None, value=None):
    resultSet = tag.findAll(attr)
    #print resultSet
    for result in resultSet:
        #print "result:", result[name][0]
        if (name==None or value==None):
            return result
        
        if result.has_attr(name):
            if result[name] == value or result[name][0] == value:
                return result
            #return resultSet