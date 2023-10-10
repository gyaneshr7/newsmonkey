import React from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  articles = [
    {
    "source": {
    "id": "associated-press",
    "name": "Associated Press"
    },
    "author": "WILL WEISSERT",
    "title": "Former Texas Rep. Will Hurd suspends long-shot GOP 2024 presidential bid, endorses Nikki Haley - The Associated Press",
    "description": "Former Texas congressman Will Hurd has suspended his Republican presidential bid, abandoning a brief campaign built on criticizing Donald Trump at a time when his party seems even more determined to embrace the former president. Hurd is endorsing Nikki Haley …",
    "url": "https://apnews.com/article/will-hurd-ends-2024-presidential-campaign-c34b3c8d9ef44126e8e36623b1dc3021",
    "urlToImage": "https://dims.apnews.com/dims4/default/65bcd97/2147483647/strip/true/crop/6140x3454+0+438/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F42%2F31%2F56add88c144840362d2938b47850%2Ff76728bcf0a340b7bd982c996f6a1817",
    "publishedAt": "2023-10-10T01:58:00Z",
    "content": "WASHINGTON (AP) Former Republican Texas congressman Will Hurd suspended his presidential bid on Monday and endorsed fellow GOP primary candidate Nikki Haley, officially abandoning a brief campaign bu… [+4629 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Yahoo Sports Staff",
    "title": "MLB playoffs NLDS Game 2 live tracker: Braves bounce back in Game 2, Dodgers trying to earn series split - Yahoo Sports",
    "description": "The Braves again started slowly in Game 2, but they'll go to Philly tied 1-1.",
    "url": "https://sports.yahoo.com/mlb-playoffs-nlds-game-2-live-tracker-braves-bounce-back-in-game-2-dodgers-trying-to-earn-series-split-013030665.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/8U9FCoYIVXL3DQUPZkR64Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-10/af3c0760-66d8-11ee-bffa-4055f1e5e411",
    "publishedAt": "2023-10-10T01:32:00Z",
    "content": "It's a new day and a new week, and the Braves have earned their first win of the 2023 postseason.\r\nThe Braves got caught standing still on Saturday against a Phillies team that was already running at… [+1382 chars]"
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Missy Ryan, Karen DeYoung, Dan Lamothe",
    "title": "U.S. 'surging support' to Israel, vows aid in Hamas hostage standoff - The Washington Post",
    "description": "Intensifying war in Gaza poses a combustible challenge for President Biden as casualties mount.",
    "url": "https://www.washingtonpost.com/national-security/2023/10/09/hamas-hostages-biden-israel-support/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/LEI3EDKDL4J7UVTGPRI64BI5CU_size-normalized.jpg&w=1440",
    "publishedAt": "2023-10-10T01:31:38Z",
    "content": "Comment on this story\r\nComment\r\nThe Biden administration raced to deliver military support to Israel on Monday in its spiraling conflict with Hamas, as U.S. officials vowed to account for Americans k… [+8556 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Variety"
    },
    "author": "Gene Maddaus",
    "title": "SAG-AFTRA Talks to Resume on Wednesday - Variety",
    "description": "SAG-AFTRA is scheduled to keep talking on Wednesday with the major studios on a deal to end the 88-day actors strike.",
    "url": "https://variety.com/2023/biz/news/sag-aftra-talks-to-continue-1235749961/",
    "urlToImage": "https://variety.com/wp-content/uploads/2023/10/SAG-Strike-Picket-Line-3.jpg?w=1000&h=563&crop=1",
    "publishedAt": "2023-10-10T01:21:00Z",
    "content": "Negotiations on a new SAG-AFTRA contract have finished for the day and are set to continue on Wednesday, as the two sides work to resolve the 88-day actors strike.\r\nThe union and the Alliance of Moti… [+2320 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "Emily Mae Czachor",
    "title": "Live Updates: Israel and Hamas at war after Palestinian militants launch deadly attacks from Gaza - CBS News",
    "description": "Hundreds have been killed since Hamas launched a surprise attack on Israel Saturday, leading the prime minister to declare war and unleash deadly strikes on Gaza.",
    "url": "https://www.cbsnews.com/live-updates/israel-hamas-palestinian-war-attacks-gaza-strip/",
    "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/10/09/d41298ac-0412-4ff8-a1eb-7e3692c12f26/thumbnail/1200x630/8f999c909431ff35f839e1887aa5eea6/gettyimages-1715494528.jpg?v=69042d5753ca4b526d6a54f60ee177ca",
    "publishedAt": "2023-10-10T01:17:32Z",
    "content": "Hamas threatened on Monday to kill hostages it is holding if Israeli airstrikes continue \"targeting\" Gaza residents without warning.\r\n\"We declare that any targeting of our people in their homes witho… [+1273 chars]"
    }
    ]

  constructor(){
    super()
    this.state = {
       articles: this.articles,
       loading: false
    }
  }

  render() {
    <div className="container">
      <h2>NewsMonkey - Top Headlines</h2>
      <div className="row">
        <div className="col-md-4">
          <NewsItem title="myTtile" description="myDesc" imageurl="https://www.cnet.com/a/img/resize/33d32bb3a84e72d51ee95afe0b273064a6a3a9be/hub/2023/09/27/e864a91a-7e2d-4a8f-a6da-e8896449f052/20230925-google-pixel-8-and-8-pro-02.jpg?auto=webp&fit=crop&height=675&width=1200"/>
        </div>
        <div className="col-md-4">
          <NewsItem title="myTtile" description="myDesc" />
        </div>
        <div className="col-md-4">
          <NewsItem title="myTtile" description="myDesc" />
        </div>
      </div>
    </div>
  };
}
