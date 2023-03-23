import logo from './logo.svg';
import './App.css';
import {
  Container,
  GlobalStyles,
  OverviewSection,
  ClassificationSection,
  GraphSection,
  ImagePrototypesSection
} from './App.style'
import {Upload} from './components/upload/upload'
import { useState } from 'react';
import { RankedPrototypes } from './components/RankedPrototypes/RankedPrototypes';
import { ScorePrediction } from './components/ScorePrediction/ScorePrediction';
import { StatsOverview } from './components/StatsOverview/StatsOverview';
import { ImageDetails } from './components/ImageDetails/ImageDetails';

function App() {
  const [fileUrl, setFileUrl] = useState()
  const handleUploadChange = (file) => {
   const url =  URL.createObjectURL(file)

    setFileUrl(url)
  }

  return (
    <Container>
      <GlobalStyles />

      <OverviewSection>
        <Upload onChange={handleUploadChange} />
        <StatsOverview title="Total Images" value="17,000" />
        <StatsOverview title="Number of Patches" value="6" />
        <StatsOverview title="Total Classes" value="198" />
      </OverviewSection>

      <ClassificationSection>
        <ImageDetails src={fileUrl} />
        <GraphSection />
      </ClassificationSection>

      <ImagePrototypesSection>
        <RankedPrototypes />
        <ScorePrediction />
      </ImagePrototypesSection>
    </Container>
  );
}

export default App;
