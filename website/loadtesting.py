from locust import HttpUser, task

# test performance using locust

class QuickstartUser(HttpUser):
    @task
    def test(self):
        url = f"https://alvinmlytics.xyz"
        self.client.get(url=url)