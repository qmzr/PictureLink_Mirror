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
import Response from './response.json'
import { BarChart } from './components/BarCharts/BarCharts';

function App() {
  const [fileUrl, setFileUrl] = useState()
  const [aspectRatio, setAspectRatio] = useState(0)
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedBar, setSelectedBar] = useState(null)

  const handleUploadChange = (file) => {
   const url =  URL.createObjectURL(file)
    setFileUrl(url)


    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)


    fileReader.onload = () => {
      const image = new Image()
      image.src = fileReader.result

      image.onload = () => {
        const { width, height } = image
        setAspectRatio(width/height)
      }
    }
  }



  return (
    <Container>
      <GlobalStyles />

      <OverviewSection>
        <Upload onChange={handleUploadChange} />
        <StatsOverview title="Total Images" value="5792" />
        <StatsOverview title="Number of Patches" value="10" />
        <StatsOverview title="Total Classes" value="200" />
      </OverviewSection>

      <ClassificationSection>
        <ImageDetails
          src={fileUrl}
          aspectRatio={aspectRatio}
          coordinates={Response.top_10_prototypes[0].all_cordinates}
          selectedItem={selectedItem}
        />
        <GraphSection>
          <BarChart onClick={setSelectedBar}/>
        </GraphSection>
      </ClassificationSection>

      <ImagePrototypesSection>
        <RankedPrototypes onItemClick={setSelectedItem} />
        <ScorePrediction selectedBar={selectedBar} />
      </ImagePrototypesSection>
    </Container>
  );
}

export default App;
