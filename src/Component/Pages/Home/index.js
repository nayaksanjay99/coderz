import React from 'react'
import ImageBar from '../../Reusables/ImageBar'
import Fourimg from './fourimg'
import Services from './services'
import Nitin from '../../../images/nitin gadkari.jpg'
import Satyapal from '../../../images/satyapal.jpg'
import Arjun from '../../../images/arjun.jpg'
import './index.css'

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <ImageBar/>
                <div style={{backgroundColor:'#fff',width:"100%",height:"11.3vw",textAlign:"center"}}>
                    <div id="cabinet">
                        <div className="ministers">
                            <img src={Satyapal} alt="Dr. Satya Pal Singh"/>
                            <h3>Hon'ble MoS</h3>
                            <p>Dr. Satya Pal Singh</p>
                        </div>
                        <div className="ministers">
                            <img src={Nitin} alt="Shri Nitin Jairam Gadkari"/>
                            <h3>Hon'ble Minister</h3>
                            <p>Shri Nitin Jairam Gadkari</p>
                        </div>
                        <div className="ministers">
                            <img src={Arjun} alt="Shri Arjun Ram Meghwal"/>
                            <h3>Hon'ble MoS</h3>
                            <p>Shri Arjun Ram Meghwal</p>
                        </div>
                    </div>
                </div>
                <div id="parallax1">
                    <h1 style={{fontFamily:"Georgia, serif"}}>Projects</h1>
                </div>
                <Fourimg/>
                <div id="parallax2">
                    <h1 style={{fontFamily:"Georgia, serif"}}>Services</h1>
                </div>
                <Services/>
                <div id="parallax3">
                    <h1 style={{fontFamily:"Georgia, serif"}}>News</h1>
                </div>
                <div>
                <div style={{fontFamily:"Georgia, serif"}}>
                <table class="table table-hover table-bordered" style={{backgroundColor:"#e0e7ff",textAlign: "justify"}}>
                        <thead style={{backgroundColor:"#00457c",color:"WHITE"}}>
                          <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Title</th>
                            <th scope="col">Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Draft RRs for the recruitment to the posts of Scientist ‘F and Scientist ‘G’ in the Central Soil & Materials Research Station, New Delhi, under the Ministry of Water Resources, RD & GR : Stake holders can mail their comments to etwo-mowr[at]nic[dot]in</td>
                            <td><a href="http://mowr.gov.in/sites/default/files/RR_CWPRS_SC-F-G_Draft_Feb2019.pdf" target="blank" style={{color:"blue"}}>Download (906.17 KB)</a></td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Draft RRs for the recruitment to the posts of Scientist ‘F and Scientist ‘G’ in the Central Water and Power Research Station, Pune, under the Ministry of Water Resources, RD & GR : Stake holders can mail their comments to etwo-mowr[at]nic[dot]in</td>
                            <td><a href="http://mowr.gov.in/sites/de.fault/files/RR_CWPRS_SC-F-G_Draft_Feb2019.pdf" target="blank" style={{color:"blue"}}>Download (906.17 KB)</a></td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Jal Charcha Monthly Magazine of Ministry of Water Resources, RD & GR</td>
                            <td><a href="http://mowr.gov.in/sites/default/files/JalCharcha-Jan-2019.pdf" target="blank" style={{color:"blue"}}>Link</a></td>
                          </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td >Amendment of Recruitment Regulations (RRs) for the Group 'B' Posts in Brahmaputra Board - Comments on revised draft RRs</td>
                                <td><a href="http://mowr.gov.in/sites/default/files/RR-BB-Group-B-Dec-2018.pdf " target="blank" style={{color:"blue"}}>Download (5.05 MB)</a></td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td >Guidelines to regulate and control Ground Water Extraction in India</td>
                                <td><a href="http://mowr.gov.in/sites/default/files/CGWA_GWExtraction_Notification_0.pdf" target="blank" style={{color:"blue"}}>Link</a></td>
                            </tr>
                    
                        </tbody>
                      </table>
                      <nav aria-label="Page navigation example">
                        <ul class="pagination">
                          <li class="page-item"><a class="page-link" href="news1.html" target="blank">Read More</a></li>
                        </ul>
                      </nav>
                    </div>
                </div>
            </div>
        )
    }
}