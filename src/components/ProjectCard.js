import { Col } from "react-bootstrap"

export const ProjectCard = ({title, code, demo, description, img}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={img} alt="" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span className="pad">{description}</span>
                    <div>
                        <a href={code}><span>code</span></a>
                        <span>   </span>
                        <a href={demo}><span>demo</span></a>
                    </div>
                </div>
            </div>
        </Col>
    )
}