import React from "react";


import Hero from '../components/Hero'
import Content from '../components/Content'

function About (props) {

    return (
        <div>
            <Hero title={props.title}/>
            <Content>
                <p>Lorem ipsum dolor sit amet, consectetur
                     adipiscing elit. Nullam non enim ultrices,
                      molestie arcu at, laoreet velit. Vivamus id nulla mi.
                       Suspendisse at sollicitudin orci. Nulla sed lectus venenatis, 
                       interdum ex a, facilisis lectus. Mauris convallis velit diam, 
                       in ullamcorper velit mattis nec. Sed fermentum diam in dolor 
                       mattis molestie. Duis at lorem ligula. 
                    Suspendisse sodales rutrum augue a congue.</p>

                    <p>Proin lobortis convallis dignissim. Nulla eu tincidunt orci, 
                        vitae porttitor lacus. Morbi et urna ac augue placerat tincidunt.
                         Quisque metus mi, accumsan dapibus erat sed, vulputate aliquam 
                         ipsum. Maecenas tristique elit blandit tempor sollicitudin.
                          Suspendisse eu purus sapien. Sed et cursus arcu. Vivamus libero
                           ligula, cursus at pellentesque nec, vulputate nec nulla.
                            Mauris sed fermentum nisl, non venenatis eros.</p>
            </Content>
        </div>
    );

}

export default About;