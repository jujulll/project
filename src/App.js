import Header from './components/layout/header/header';
import Cover from './components/sections/cover/cover';
import About from './components/sections/about/about';
import Portfolio from './components/sections/portfolio/portfolio';
import Calc from './components/sections/calculator/calculator';
import Plan from './components/sections/plan/plan'
import Order from './components/sections/order/order'
import Form from './components/sections/form/form'

function App() {
  return (
    <>
      <Header />
      <main>
        <Cover />          {/* ← обложка тут */}
        <About />
        <Portfolio />
        <Calc />
        <Plan />
        <Order />
        <Form />
      </main>
    </>
  );
}

export default App;