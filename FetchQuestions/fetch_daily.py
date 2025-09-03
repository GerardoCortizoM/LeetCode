from datetime import datetime
import requests
import pprint

URL = "https://leetcode.com/graphql"
HEADERS = {
    "Referer": "https://leetcode.com/",  # Must match the site
}


def fetch_daily_question(year=None, month=None, day=None):

    # current_datetime = datetime.now()
    # year_string = year or current_datetime.strftime("%Y")
    # month_string = month or current_datetime.strftime("%m")
    day_string = day or current_datetime.strftime("%d")
    query = """query questionOfToday {
  activeDailyCodingChallengeQuestion {
    date
    userStatus
    link
    question {
      acRate
      difficulty
      freqBar
      frontendQuestionId: questionFrontendId
      isFavor
      paidOnly: isPaidOnly
      status
      title
      titleSlug
      hasVideoSolution
      hasSolution
      topicTags {
        name
        id
        slug
      }
    }
  }
}"""
    response = requests.post(
        URL,
        # json={"query": query, "variables": {}, "headers": HEADERS}
        json={"query": query, "variables": {}}
    )

    data = response.json()
    pprint.pprint(data)


fetch_daily_question()
