import React, {Component} from 'react'
import ReactDOM from 'react-dom'
//import io from 'socket.io-client'
import 'whatwg-fetch'

import FaPhone from 'react-icons/lib/fa/phone'
import FaEnvelope from 'react-icons/lib/fa/envelope'


//import FaComments from 'react-icons/lib/fa/comments'
//import FaCommentingO from 'react-icons/lib/fa/commenting-o'

//import FaToggleOff from 'react-icons/lib/fa/toggle-off'
//import FaToggleOn from 'react-icons/lib/fa/toggle-on'


import styles from './app.css'
import photo from './photo.jpg'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
        }

    }

    render() {
        return (
            <div className={styles.container}>
                <Header/>
                <Main/>
            </div>
        )
    }
}

class Header extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            infos: []
        }

    }

    componentDidMount(){
        fetch('http://alexandre.hassler.fr:3003/cvinfos/user')
            .then(res => res.json())
            .then(infos => {
                console.log(infos)
                this.setState({
                    infos:  [...infos]
                })

            })
            .catch(err => console.log(err))
    }

    render(){
        console.log(this.state.infos)
        const infos = this.state.infos.map((info, index) => {
            return (
                <div className={styles.header} key={index}>
                    <div className={styles.title}>
                        <h3>{info.prenom} {info.nom}</h3>
                        <h1>{info.situation}</h1>
                    </div>
                    <div className={styles.infos}>
                        <ul>
                            <li>
                                {info.adresse.split(",")[0]}
                                <br />
                                {info.adresse.split(",")[1]} 
                            </li>
                            <li><FaPhone/><span>{info.portable}</span></li>
                            <li><FaPhone/><span>{info.fixe}</span></li>
                            <li><FaEnvelope/><a href="mailto:alexandre@hassler.fr">{info.email}</a></li>
                            <li>{info.naissance}</li>
                        </ul>
                        <img  src={photo} className={styles.photo} alt="fireSpot"/>
                    </div>
                </div>
            )
        })

        return(
            <div>
                {infos}
            </div>
        )
    }
}

class Main extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            education: [],
            employement: [],
            skills: []
        }

    }

    componentDidMount(){
        fetch('http://alexandre.hassler.fr:3003/cvinfos/education')
            .then(res => res.json())
            .then(education => {
                this.setState({
                    education:  [...education]
                })

            })
            .catch(err => console.log(err))


        fetch('http://alexandre.hassler.fr:3003/cvinfos/employement')
            .then(res => res.json())
            .then(employement => {
                this.setState({
                    employement:  [...employement]
                })

            })
            .catch(err => console.log(err))

        
        fetch('http://alexandre.hassler.fr:3003/cvinfos/skills')
            .then(res => res.json())
            .then(skills => {
                this.setState({
                    skills:  [...skills]
                })

            })
            .catch(err => console.log(err))
    }


    render(){

        const education = this.state.education.map((edu, index) => {
            return (
                <li key={index}>
                    <div className={styles.date}>
                        {edu.periode}    
                    </div>
                    <div className={styles.description}>
                        <span>
                            {edu.description},
                        </span>
                        <span>
                            {edu.etablissement},
                        </span>
                        <span>
                            {edu.ville}
                        </span>
                    </div>
                </li>
            )
        })


        const employement = this.state.employement.map((empl, index) => {
            return (
                <li key={index}>
                    <div className={styles.date}>
                        {empl.periode}    
                    </div>
                    <div className={styles.description}>
                        <span>
                            {empl.description},
                        </span>
                        <span>
                            {empl.etablissement},
                        </span>
                        <span>
                            {empl.ville}
                        </span>
                    </div>
                </li>
            )
        })

        const skills = this.state.skills.map((skill, index) => {
            return (
                <li key={index}>
                    <div className={styles.skill}>
                        {skill.skill}    
                    </div>
                    <div>
                        <span>
                            {skill.description}
                        </span>
                    </div>
                </li>
            )
        })

        return(
            <div className={styles.main}>
                <div className={styles.topic}>
                    <div className={styles.topic_title}>
                        <div className={styles.blueline}></div>
                        <div>
                            Education history
                        </div>
                    </div>

                    <div className={styles.history}>
                        <ul>
                            {education}
                        </ul>
                    </div>
                </div>
                <div className={styles.topic}>
                    <div className={styles.topic_title}>
                        <div className={styles.blueline}></div>
                        <div>
                            Employement history and internships
                        </div>
                    </div>

                    <div className={styles.history}>
                        <ul>
                            {employement}
                        </ul>
                    </div>
                </div>
                <div className={styles.topic}>
                    <div className={styles.topic_title}>
                        <div className={styles.blueline}></div>
                        <div>
                            Skills
                        </div>
                    </div>

                    <div className={styles.history}>
                        <ul>
                            {skills}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


ReactDOM.render((
    <App/>
), document.getElementById('app'))
