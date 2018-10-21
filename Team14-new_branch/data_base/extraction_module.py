# extracting data from csv using the python panda package

def extraction():

	from sqlalchemy import create_engine
	import pandas as pd
	import pandasvalidation as pv

	file_location1 = '../data/animals.csv'
	file_location2= '../data/vet_care_log.csv'
	db_table1 = 'users'
	db_table2 = 'vetlog'
	uri = 'mysql+pymysql://root:password@localhost/db'

	engine = create_engine(uri)

	# Read
	file1 = pd.read_csv(file_location1)
	file2 = pd.read_csv(file_location2)

	# validation
	print "Validation Errors for file 1: "+str(pv.validate_datetime(file1.Date))

	print "Validation Errors for file 2: "+str(pv.validate_datetime(file2.Cost))

	file1.to_sql(db_table1, con=engine,if_exists='append')
	file2.to_sql(db_table2, con=engine,if_exists='append')

extraction()
