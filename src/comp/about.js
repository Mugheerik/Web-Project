import { Link } from "react-router-dom";

const About = () => {
    return (  
        <div className="container">
            <div className="row m-2">
                <div className="  col-12">
                    <div className="card text-bg-dark">
                        <img src="https://th.bing.com/th/id/R.9b21fccdb719c994c8e89db561d3cfa1?rik=nLY3pU4WnnhffA&pid=ImgRaw&r=0&sres=1&sresct=1 " alt=""/>
                        <div className="card-img-overlay m-5 pl-4 col-sm-4 col-md-3">
                            <h2 className="card-title  ">Lets Complete Your OutFit!!</h2>
                            <Link  to="/Signup" className="btn btn-outline-info rounded-pill Link">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;