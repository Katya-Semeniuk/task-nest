import  {Spinner} from "react-bootstrap";

export const Loader = () => {
  return (
    <div>
         <Spinner animation="border" variant="primary" className="ml-auto mr-auto"/>
    </div>
  )
}

export default Loader;