import schedule
import time
from extraction_module import extraction

extraction_time = "02:50"

# def do(self, job_func, *args, **kwargs):
#     self.job_func = functools.partial(job_func, *args, **kwargs)
#     functools.update_wrapper(self.job_func, job_func)
#     self._schedule_next_run()
#     return self

schedule.every().day.at("03:45").do(extraction)

while True:
    schedule.run_pending()
    time.sleep(1)