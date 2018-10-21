# the following code assists in schedules and times from
# user provided csv files

import schedule
import time
from extraction_module import extraction

extraction_time = "02:50"

schedule.every().day.at("03:45").do(extraction)

while True:
    schedule.run_pending()
    time.sleep(1)
