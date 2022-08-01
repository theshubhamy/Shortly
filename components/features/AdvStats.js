import {
  AdvanceStatsContainer,
  AdvanceStatsDescription,
  AdvanceStatsHeading,
  BRConDiv,
  BRCyanDiv,
} from "./StatsElements";

import RecCard from "./RecCard";
const AdvStats = () => {
  return (
    <AdvanceStatsContainer>
      <AdvanceStatsHeading>Advance Statistics</AdvanceStatsHeading>
      <AdvanceStatsDescription>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </AdvanceStatsDescription>
      <BRConDiv>
        <RecCard />
        <BRCyanDiv></BRCyanDiv>
        <RecCard />
        <BRCyanDiv></BRCyanDiv>
        <RecCard />
      </BRConDiv>
    </AdvanceStatsContainer>
  );
};

export default AdvStats;
