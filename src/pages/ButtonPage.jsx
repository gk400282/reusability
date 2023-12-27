import Button from '../components/Button';
import { GoBell, GoCloud, GoAlertFill } from "react-icons/go";

function ButtonPage() {

  return (
    <>
      <div>
        <Button className="m-2" primary outline rounded onClick={() => console.log("Clicked!")}><GoBell />Click me</Button>
        <Button className="m-2" secondary outline rounded>Buy Now</Button>
        <Button className="m-2" success outline onMouseEnter={() => console.log("Enters mouse!")}><GoCloud />Buy Now</Button>
        <Button className="m-2" warning rounded>Buy Now</Button>
        <Button className="m-2" danger outline rounded onMouseLeave={() => console.log("Mouse leaves!")}><GoAlertFill />Buy Now</Button>
      </div>
    </>
  )
}

export default ButtonPage;