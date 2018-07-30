import React, { Component } from 'react';

import Icon from '../icon';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon') }
                {/*arrow component */}
                {/*action button component */}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed ipsum ac augue congue egestas sit amet vel dolor. Integer bibendum pulvinar risus. Aliquam erat volutpat.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;