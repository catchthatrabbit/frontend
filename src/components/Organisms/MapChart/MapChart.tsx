import React from "react";
import { TextFormatOutputType } from "@site/src/utils/textFormat";
import { Spacer } from "@site/src/components/Atoms/Spacer";
import { LoadingPlaceholder } from "@site/src/components/Atoms/LoadingPlaceholder";
import { InfoBoxLoadingSkeleton } from "@site/src/components/Atoms/InfoBoxLoadingSkeleton";
import { InfoBox } from "@site/src/components/Molecules/InsideChart/Info";
import { useMediaQueries } from "@site/src/hooks/useMediaQueries";

import styles from "./styles.module.css";

interface IMapChart {
  infoItems: Array<{ title: string; value: TextFormatOutputType }>;
  children?: React.ReactNode;
  isLoading?: boolean;
}

const horClassName =
  "xl-flex-col--2 lg-flex-col--2 md-flex-col--6 sm-flex-col--12 xs-flex-col--12";

const MapChart = ({ children, infoItems, isLoading }: IMapChart) => {
  const { mobile, tablet } = useMediaQueries();

  const ConfiguredInfoBox = () => (
    <>
      <InfoBox
        boardClassNameHor={horClassName}
        isLoading={isLoading}
        items={infoItems}
        loadingComponent={
          <InfoBoxLoadingSkeleton
            boardClassNameHor={horClassName}
            loadingPlaceholder={<LoadingPlaceholder />}
          />
        }
      />
    </>
  );

  return (
    <div className={styles.mapRoot}>
      {!mobile && !tablet && (
        <>
          <Spacer variant="lg" />
          <ConfiguredInfoBox />
          <Spacer variant="lg" />
        </>
      )}
      <div>{children}</div>
      {(mobile || tablet) && (
        <>
          <Spacer variant="lg" />
          <ConfiguredInfoBox />
        </>
      )}
    </div>
  );
};

export default MapChart;
