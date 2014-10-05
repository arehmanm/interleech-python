import peewee
import MySQLdb
from _mysql_exceptions import OperationalError, IntegrityError, ProgrammingError

time_constant = 141010899674

class Item(peewee.Model):
    @classmethod
    def CreateTable(cls, tableName, attrList, dbHintsDict):
        db = MySQLdb.connect(host   = "localhost",
                     user   = "interleech",
                     passwd = "abc123",
                     db     = "interleech")
        cur = db.cursor()
        attrList = ['Time BIGINT NOT NULL'] + [x + " " + dbHintsDict[x] if dbHintsDict.has_key(x) else x + " TEXT" for x in attrList]
        sqlQuery = "CREATE TABLE " + tableName + " (" + ",".join(attrList)  + ");"
        print sqlQuery
        try:
            cur.execute(sqlQuery)
            return True
        except OperationalError:
            return False 
        except ProgrammingError:
            return False
    
    @classmethod
    def Check(self, tableName, id):
        db = MySQLdb.connect(host   = "localhost",
                     user   = "interleech",
                     passwd = "abc123",
                     db     = "interleech")
        
        cur = db.cursor()
        
        sqlQuery = "SELECT * FROM " + tableName + " where id=\"" + unicode(id + "\"")
        print sqlQuery
        try:
            cur.execute(sqlQuery)
            results = cur.fetchall()
        except ProgrammingError:
            results = ()
        except OperationalError:
            results = ()
        db.close()
        return results
        
    def Save(self, tableName, attrList, time):
        db = MySQLdb.connect(host   = "localhost",
                     user   = "interleech",
                     passwd = "abc123",
                     db     = "interleech")
        cur = db.cursor()
        
        for x in attrList:
            if hasattr(self, x) and type(getattr(self, x)) is list:
                self.__setattr__(x, ",".join(y for y in getattr(self, x)))
        
        sqlQuery = "INSERT INTO " + tableName + " (Time, " + u','.join(x for x in attrList if 
                    hasattr(self, x)) + ") VALUES(" + str(time-time_constant) + "," + u','.join("%s" for x in attrList if hasattr(self, x)) + ");"
        print sqlQuery
        try:
            valueList = [unicode(getattr(self, x)).encode('cp1252') for x in attrList if hasattr(self, x)]
            print valueList
            cur.execute(sqlQuery, valueList)
            retVal = True
        except IntegrityError:
            print "Integrity Error!"
            retVal = False
        except ProgrammingError:
            print "Programming Error!"
            retVal = False
        
        db.commit()
        db.close()
        return retVal

    @classmethod
    def getItems(cls, tableName):
        db = MySQLdb.connect(host   = "localhost",
                     user   = "interleech",
                     passwd = "abc123",
                     db     = "interleech")
        
        cur = db.cursor()
        
        sqlQuery = "SELECT * FROM " + tableName
        print sqlQuery
        cur.execute(sqlQuery)
        results = cur.fetchall()
        db.close()
        return results
    
    
