from datetime import datetime
import requests

URL = "https://leetcode.com/graphql"
HEADERS = {
    "Referer": "https://leetcode.com/",  # Must match the site
}


def fetch_daily_question(year=None, month=None, day=None):

    current_datetime = datetime.now()
    year_string = year or current_datetime.strftime("%Y")
    month_string = month or current_datetime.strftime("%m")
    day_string = day or current_datetime.strftime("%d")
    URL = "https://leetcode.com/graphql/?query=query{"
    query = f"""
    query questionOfToday {{
    dailyCodingChallengeV2 {{
        date
        question {{
            title
            titleSlug
            difficulty
            content
        }}
    dailyCodingChallengeV2(year: {year_string}, month: {month_string}) {{
        challenges {{
            date
            question {{
                questionFrontendId
                title
                titleSlug
                difficulty
                stats
        }}
        }}
        }}
}}"""
    url = URL + query + "}"
    response = requests.post(
        url,
        json={"query": query, "variables": {}}
    )

    # data = response.json()
    # print(data)
    print(response)


fetch_daily_question()
