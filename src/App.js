import '@zyda.design/zac-tailwindcss/public/build/tailwind.css';
import Button from './components/Button';
import Heading from './components/Heading';
import Toggle from './components/Toggle';


function App() {
  return (
    <div className="global typography-default dark h-screen bg-negative-primary justify-center items-center">
      <div className="container mx-auto h-full flex flex-wrap content-center space-y-24">

        <div className="flex flex-wrap w-full space-y-12 content-top items-center justify-center">
          <div className="w-full">
            <Heading value="Heading 120" type="h120" />
          </div>
          <div className="w-full">
            <Heading value="Heading 96" type="h96" />
          </div>
          <div className="w-full">
            <Heading value="Heading 72" type="h72" />
          </div>
          <div className="w-full">
            <Heading value="Heading 56" type="h56" />
          </div>
          <div className="w-full">
            <Heading value="Heading 40" type="h40" />
          </div>
          <div className="w-full">
            <Heading value="Heading 32" type="h32" />
          </div>
          <div className="w-full">
            <Heading value="Heading 24" type="h24" />
          </div>
          <div className="w-full">
            <Heading value="Heading 20" type="h20" />
          </div>
          <div className="w-full">
            <Heading value="Heading 16" type="h16" />
          </div>
          <div className="w-full">
            <Heading value="Heading 14" type="h14" />
          </div>
          <div className="w-full">
            <Heading value="Heading 12" type="h12" />
          </div>
        </div>

        <div className="w-full space-x-12 content-top items-center justify-center">
          
            <Toggle />
          
        </div>

        <div className="flex flex-wrap w-full space-x-12 content-top items-center justify-center">
          <div>
            <Button value="Button" type="primary" size="large" layout="hug" />
          </div>
          <div>
            <Button value="Button" type="primary" size="medium" layout="hug" />
          </div>
          <div>
            <Button value="Button" type="primary" size="small" layout="hug" />
          </div>
        </div>

        <div className="flex flex-wrap w-full space-x-12 items-center justify-center">
          <div>
            <Button value="Button" type="secondary" size="large" layout="hug" />
          </div>
          <div>
            <Button value="Button" type="secondary" size="medium" layout="hug" />
          </div>
          <div>
            <Button value="Button" type="secondary" size="small" layout="hug" />
          </div>
        </div>

        <div className="flex flex-wrap w-full space-x-12 items-center justify-center">
          <div>
            <Button value="Button" type="tertiary" size="large" layout="hug" />
          </div>
          <div>
            <Button value="Button" type="tertiary" size="medium" layout="hug" />
          </div>
          <div>
            <Button value="Button" type="tertiary" size="small" layout="hug" />
          </div>
        </div>

        <div className="flex flex-wrap w-full space-x-12 items-center justify-center">
          <div>
            <Button value="Button" type="ghost" size="large" layout="hug" />
          </div>
          <div>
            <Button value="Button" type="ghost" size="medium" layout="hug" />
          </div>
          <div>
            <Button value="Button" type="ghost" size="small" layout="hug" />
          </div>
        </div>

        <div className="flex flex-wrap w-full space-x-12 items-center justify-center">
          <div>
            <Button value="Button" type="danger" size="large" layout="hug" />
          </div>
          <div>
            <Button value="Button" type="danger" size="medium" layout="hug" />
          </div>
          <div>
            <Button value="Button" type="danger" size="small" layout="hug" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
