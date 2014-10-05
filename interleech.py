#!/usr/bin/env python
from time import sleep
from org.mustadroid.python.interleech import processPage
import MySQLdb
from org.mustadroid.python.interleech.item import Item
import re
import time

if __name__ == "__main__":
    db = MySQLdb.connect(host   = "localhost",
             user   = "interleech",
             passwd = "abc123",
             db     = "interleech")
    cur = db.cursor()
    sqlQuery = "SELECT * FROM interleech ORDER by id ASC"
        
    while True:
        cur.execute(sqlQuery)
        results = cur.fetchall()
        print results
        rows = [results[5]]
        for row in results:
            print "\n################## PROCESSING " + row[1] + " #######################\n"
            processPage.attrList = set()
            processPage.dbHintsDict = dict()
            processPage.tableName = row[1]
            processPage.abortProcessing = False
            processPage.xmlBase = re.compile('(.*)/(.*)').search(row[3]).group(1) + "/"
            processPage.base = re.compile('(.*).se/(.*)').search(row[2]).group(1) + ".se"
            processPage.timeStamp = int(time.time() * 100)
            itemList = []
            processPage.processPage(row[2], row[3], itemList, Item)
            Item.CreateTable(processPage.tableName, processPage.attrList, processPage.dbHintsDict)
            i = 0
            for item in itemList:
                if item.id is not None:
                    item.Save(processPage.tableName, processPage.attrList, processPage.timeStamp - i)
                i += 1
            
        print "\n################### FINISHED PROCESSING #######################\n" 
                
        sleep(60)
    
    db.close()
