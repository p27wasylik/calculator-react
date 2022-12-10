
import './App.css';
import Label from './label';
import Legend from './legend';
import Fieldset from './fieldset';
import Container from './container'
import Header from './header';
import Section from './section';
import Paragraph from './paragraph';


function App() {
  return (
    <>
      <Header
        titlePartOne="Kalkulator"
        titleEmoji="®"
        titlePartTwo="Walutowy"
        extended="Stan na dzień 10.10.2022 r. godz. 22:00"

      />
      <Section>
        <Paragraph />
        <Container>
          <Fieldset
            legend={
              <Legend
                content="PLN » €"
              />}
            content1={
              <Label
                placeholder="PLN"
                disable={false}
              />
            }
            content2={
              <Label
                placeholder="EUR"
                disable={true}
              />
            }

          />
          <Fieldset
            legend={
              <Legend
                content="€ » PLN"
              />
            }
            content1={
              <Label
                placeholder="EUR"
                disable={false}
              />
            }
            content2={
              <Label
                placeholder="PLN"
                disable={true}
              />
            }
          />
        </Container>
      </Section>
</>

  )
}

export default App;
