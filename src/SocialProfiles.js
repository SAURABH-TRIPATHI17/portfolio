import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';
import socialProfiles from './data/socialProfiles';
class SocialProfile extends Component{
    
    render()
    {
        const {title, image, link} = this.props.socialProfile;
        return(
            <div style={{display:'inline-block',width:'3%', margin:'0.3%'}}>
                <h6>{title}</h6>
                <a href={link}><img src={image} alt='social-profile' style={{width:'100%', height:'100%' }}></img>
                </a>
            </div>
        )
    }
}

class SocialProfiles extends Component{
    render(){
        return(
            <div>
                <h4>Social Profiles</h4>
                <div>
                    {
                        SOCIAL_PROFILES.map( SOCIAL_PROFILE => {
                            return(
                                <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                            );
                        }
                        )
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;