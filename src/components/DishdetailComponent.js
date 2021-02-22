import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component {
    renderDish (dish) {
        if (dish !== null) {
            return (
                <Card>
                    <CardImg width={"100%"} src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    renderComments (dish) {
        if (dish !== null && dish.comments !== null) {
            return (
                <div>
                    <div className={"row"}>
                        <div className={"col-12"}>
                            <h4>Comments</h4>
                            <ul className={"list-unstyled"}>
                                {dish.comments.map((comment) => {
                                    return(
                                        <div key={comment.id}>
                                            <li className={"my-2"}>{comment.comment}</li>
                                            <li className={"my-2"}>-- {comment.author} , {new Intl.DateTimeFormat('en-UK', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                                        </div>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }
    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-sm-12 col-md-5 m-1"}>
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className={"col-sm-12 col-md-5 m-1"}>
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;
