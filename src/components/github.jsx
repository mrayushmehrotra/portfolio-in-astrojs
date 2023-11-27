import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <center>
      <GitHubCalendar
        username="mrayushmehrotra"
        blockSize={15}
        blockMargin={4}
        fontSize={20}
        hideMonthLabels
        hideTotalCount
        hideColorLegend
      />
    </center>
  );
}
export default Github;
