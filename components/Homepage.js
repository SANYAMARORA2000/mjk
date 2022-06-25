import React from 'react';
import styles from '../styles/Homepage.module.css'
import Image from 'next/image';
import { Dots,Logo,ArrowDown,RightArrowDash,
InfoArrowDown,DesignLine,Arrow} from './assets/icons';
import {ExploreFood1,ExploreFood2,ExploreFood3,
ExploreFood4,ExploreFood5,LeftArrow,
RightArrow,FoodPic,LandMark,
FoodPic1,FoodPic2,SeeMoreArrow,
PlayStore,AppStore,MobileDevice,
EmailArrow,Leaves,Linkedin,Twitter,
Instagram,Facebook,Lettuce,
ServicesBackground,AdvanceTable,
FreeFood,DeliveryPic} from '../public/Images/Image.js'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Homepage=()=>{

  const PlaceArray=[
    {
        imageSrc:FoodPic1,
        cityName:'Hitech City',
        placeTitle:'Fire Water',
        placeDescription:'we are all about we are all about to the fullest and all content dining out or in!dining out or in!'

    },
    {
        imageSrc:FoodPic2,
        cityName:'Gachibowli',
        placeTitle:'Fire Water',
        placeDescription:'we are all about we are all about to the fullest and all content dining out or in!dining out or in!'

    }
  ]
  const ExploreArray=[
    {
        imageSrc:ExploreFood1,
        foodTitle:'Ham Sandwich',
        foodPrice:'$10.50',
        Description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'

    },
    {
        imageSrc:ExploreFood2,
        foodTitle:'Ham Sandwich',
        foodPrice:'$10.50',
        Description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'

    },
    {
        imageSrc:ExploreFood3,
        foodTitle:'Ham Sandwich',
        foodPrice:'$10.50',
        Description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'

    },
    {
        imageSrc:ExploreFood4,
        foodTitle:'Ham Sandwich',
        foodPrice:'$10.50',
        Description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'

    },
    {
        imageSrc:ExploreFood5,
        foodTitle:'Ham Sandwich',
        foodPrice:'$10.50',
        Description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'

    },
    {
        imageSrc:ExploreFood5,
        foodTitle:'Ham Sandwich',
        foodPrice:'$10.50',
        Description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'

    }
  ]
   const MenuOptions=[
    {
        Title:'Menu One',
    },
    {
        Title:'Menu Two',
    },
    {
        Title:'Menu Three',
    },
    {
        Title:'Menu Four',
    },
  ]
 return <div className={styles.container}>
    <div className={styles.IntroPage}>
        <div className={styles.Holder}>
            <div className={styles.innerDiv}>
                <div className={styles.heading}>
                    <div className={styles.LogoSvgDiv}>
                    <Logo />
                    </div> 
                    <div className={styles.headingOptions}>
                        {
                            MenuOptions && MenuOptions.length>0 && MenuOptions.map((Obj)=>{
                                return  <div className={styles.Option}>{Obj.Title}</div>
                            })
                        }
                    </div>
                </div>
                <div className={styles.headerContent}>
                    <div className={styles.headerContentInnerDiv}>
                        <div className={styles.text}>Food</div>
                        <div className={styles.text1}>Discover Restaurant &amp; Delicious Food </div>
                        <div className={styles.inputHolder}>
                        <input className={styles.searchButton} placeholder='search restaurant,food'/>
                        <button className={styles.goButton}>
                            <div className={styles.goButtonText}>Go</div>
                        </button>
                        </div>
                    </div>
                    <div className={styles.DotSvgDiv}>
                        <div className={styles.DotSvgHolder}>
                        <Dots/>
                        </div>
                        <div className={styles.DotSvgHolder}>
                        <Dots/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.profileDiv}>
                <div className={styles.profileContent}>
                <div className={styles.profileHolderDIv}>
                    <div className={styles.profileCircle}></div>
                    <div className={styles.NameHolder}>
                        <div className={styles.NameText}>User</div>               
                        <div className={styles.ArrowHolder}>
                        <ArrowDown/>
                        </div>
                    </div>
                </div>
                <div className={styles.abc}>
                    <div className={styles.ArrowImageHolder}>
                    <Image src={LeftArrow} height={50} width={85.85}/>
                    </div>
                    <div className={styles.ArrowImageHolder} >
                    <Image src={RightArrow} height={50} width={85.85} />
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.FoodPicHolder}>
                <Carousel >
                <Image src={FoodPic} height={770} width={660}/>
                <Image src={FoodPic} height={770} width={660}/>
                <Image src={FoodPic} height={770} width={660}/>
                </Carousel>
            </div>
        <div className={styles.LocationTag}>
            <div className={styles.LandMarkImageHolder}>
                <Image src={LandMark} height={37} width={25.25}/>
            </div>
            <div className={styles.LandMarkText}>Hydrabad</div>
        </div>
        </div>
    </div>
    <div className={styles.PlaceInfo}>
        <div className={styles.Holder1}>
            <div className={styles.PlaceInfoDiv}>
                <div className={styles.InfoHolder}>
                    <div className={styles.PlaceInfoSeperator}/>
                    <div className={styles.PlaceInfoText}>some top restaurant for 
                    dining out or in!</div>
                </div>
                <div className={styles.PlaceAdditionalInfo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </div>
            </div>
            <div className={styles.PlaceInfoDivAfter}>
                <div className={styles.InfoHolder}>
                    <div className={styles.PlaceInfoSeperator}/>
                    <div className={styles.PlaceInfoText}>some top restaurant for 
                    dining out or in!</div>
                </div>
                <div className={styles.PlaceAdditionalInfo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </div>
            </div>
            <div className={styles.Holder2}>
                <div className={styles.PlaceInfoPics}>
                    <div className={styles.PlaceInfoPicHolder}>
                      {
                            PlaceArray && PlaceArray.length>0 && PlaceArray.map((Obj)=>{
                                return  <div className={styles.PlaceInfoPic}>
                                <Image src={Obj.imageSrc} height={550} width={570}/>
                                <div className={styles.InnerInfo}>
                                <div className={styles.InnerInfoTextPart}>
                                <div className={styles.InnerInfoTitle}>{Obj.placeTitle}</div>
                                <div className={styles.InnerInfoText}>{Obj.placeDescription}</div>
                                </div>
                                <div className={styles.LandMarkNButtonDiv}>
                                    <div className={styles.LandMarkNButtonHolder}>
                                        <div className={styles.LandMarkImageHolderDiv}>
                                            <Image src={LandMark} height={30} width={22.25}/>
                                        </div>
                                        <div className={styles.LandMarkImageHolderText}>{Obj.cityName}</div>
                                    </div>
                                    <button className={styles.BookNowButton}>
                                        <div className={styles.BookNowButtonText}>Book Now</div>
                                        <div className={styles.ArrowDiv}>
                                        <RightArrowDash/>
                                        </div>
                                    </button>
                                </div>
                                </div>
                            </div>
                            })
                      }
                    </div>
                    <div className={styles.SeeMoreArrowHolderDiv}>
                        <div className={styles.SeeMoreArrowHolder}>
                            <Image src={SeeMoreArrow} height={30} width={55}/>
                        </div>
                        <div className={styles.SeeMoreArrowText}>see more</div>
                    </div>
                </div>
                <div className={styles.DotSvgHolderHelper1}>
                            <Dots/>
                </div>
                <div className={styles.DotSvgHolderHelper2}>
                            <Dots/>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.AdvanceBookingDiv}>
           <div className={styles.AdvanceBookingInnerDiv}>
              <div className={styles.AdvanceBookingHeader}>
                    <div className={styles.AdvanceBookingHeaderSeperator}></div>
                    <div className={styles.AdvanceBookingHeaderText}>advanced booking</div>
              </div>
              <div>
                    <div className={styles.AdvanceBookingInput}>
                            <input className={styles.AdvanceBookingSearchButton} placeholder='search restaurant'/>
                            <button className={styles.AdvanceBookingGoButton}>
                                <div className={styles.AdvanceBookingGoButtonText}>Go</div>
                            </button>
                    </div>
                    <div className={styles.BookingDetailDiv}>
                        <div className={styles.BookingDetailInnerDiv}> 
                        <div className={styles.BookingDetails}>
                            <div className={styles.BookingDetailHeadingDiv}>
                                   <div className={styles.BookingDetailHeading}>Date</div>
                                   <div className={styles.InfoArrowHolder}>
                                    <InfoArrowDown/>
                                   </div>
                            </div>
                            <div className={styles.BookingDetailText}>15-9-19</div>
                        </div>
                        <div className={styles.BookingDetails}>
                            <div className={styles.BookingDetailHeadingDiv}>
                                   <div className={styles.BookingDetailHeading}>Time</div>
                                   <div className={styles.InfoArrowHolder}>
                                    <InfoArrowDown/>
                                   </div>
                            </div>
                            <div className={styles.BookingDetailText}>9.30 PM</div>
                        </div>
                        <div className={styles.BookingDetails}>
                            <div className={styles.BookingDetailHeadingDiv}>
                                   <div className={styles.BookingDetailHeading}>Guests </div>
                                   <div className={styles.InfoArrowHolder}>
                                    <InfoArrowDown/>
                                   </div>
                            </div>
                            <div className={styles.BookingDetailText}>2 People</div>
                        </div>
                        </div>
                    </div>
              </div>
           </div>
           <div className={styles.AdvanceBookingDotSvg1}>
                    <Dots/>
           </div>
           <div className={styles.AdvanceBookingDotSvg2}>
                        <Dots/>
           </div>
           <div className={styles.LettuceImageHolder}>
           <Image src={Lettuce}  width={800} height={1190}/>
           </div>
           <div className={styles.LettuceImageHolderAfter}>
           <Image src={Lettuce}  width={800} height={1160}/>
           </div>
    </div>
    <div className={styles.ServicesDiv}>
         <div className={styles.ServicesHeadingContainer}>
              <div className={styles.ServicesHeading}>
                  <div className={styles.ServicesSeperator}></div>
                  <div className={styles.ServicesHeadingText}>Our Services</div>
              </div>
              <div className={styles.ServicesDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </div>
         </div>
         <div className={styles.DotBackgroundHolder}>
            <Image src={ServicesBackground} width={2216} height={1280}/>
            <div className={styles.ServicesInfoContainer}>
             <div className={styles.ServicesInfoFirstDiv}>
                  <div className={styles.AdvanceTableDiv}>
                      <div className={styles.TableHolderDiv}>
                        <Image src={AdvanceTable} width={378} height={357}/>
                      </div>
                      <div className={styles.AdvanceTableTextDiv}>
                         <div className={styles.AdvanceTableHeading}>
                        advanced table booking
                        <div className={styles.DesignLineHolder}>
                            <DesignLine height={120}></DesignLine>
                        </div>
                        <div className={styles.DesignLineHolderAfter}>
                            <DesignLine height={80}></DesignLine>
                        </div>
                        </div>
                         <div className={styles.AdvanceTableDescription}>Lorem ipsum dolor sit <br/>amet, consectetur</div>
                      </div>
                      <div className={styles.ArrowHolderDiv}>
                        <Arrow width={148.385}/>
                      </div>
                      <div className={styles.ArrowHolderDivAfter}>
                        <Arrow width={110.385}/>
                      </div>
                  </div>
                  <div className={styles.FreeFoodDiv}>
                      <div className={styles.FreeFoodDivTextDiv}>
                         <div className={styles.FreeFoodHeading}>
                         Food for Free
                        </div>
                        <div className={styles.FreeFoodHelper}>
                            <div className={styles.DesignLineHelper}>
                              <DesignLine height={120}></DesignLine>
                            </div>
                            <div className={styles.DesignLineHelperAfter}>
                              <DesignLine height={100}></DesignLine>
                            </div>
                            <div className={styles.FreeFoodHeading}>24/7</div>
                        </div>
                        
                         <div className={styles.FreeFoodDescription}>Lorem ipsum dolor sit <br/>amet, consectetur</div>
                      </div>
                      <div className={styles.TableHolderDiv}>
                        <Image src={FreeFood} width={378} height={357}/>
                      </div>
                      <div className={styles.FreeFoodHolderDiv}>
                        <Arrow width={148.385}/>
                      </div>
                      <div className={styles.FreeFoodHolderDivAfter}>
                        <Arrow width={130.385}/>
                      </div>
                  </div>
             </div>
             <div className={styles.ServicesInfoSecondDiv}>
                 <Image src={DeliveryPic} width={550} height={600}/>
                 <div className={styles.DeliveryDiv}>
              <div className={styles.DeliveryDivHeading}>
              free home delivery at your door steps
              </div>
              <div className={styles.DeliveryDivDescription}>
              Lorem ipsum dolor sit <br/>amet, consectetur
              </div>
              <div className={styles.DesignDeliveryLineHelper}>
                   <DesignLine height={400}/>
              </div>
         </div>
             </div>
            </div>
         </div>
    </div>
    <div className={styles.ExploreDiv}>
        <div className={styles.ExploreInnerDiv}>
            <div className={styles.ExploreInnerInfoDiv}>
                 <div className={styles.ExploreInnerInfoText}>Explore Our Foods</div>
                 <div className={styles.ExploreInnerInfoDescription}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</div>
            </div>
            <div className={styles.ExploreInnerImageDiv}>
                {
                    ExploreArray && ExploreArray.length>0 && ExploreArray.map((Obj)=>{
                        return <div className={styles.ExploreInnerImage}>
                        <div className={styles.ExploreInnerImageHolder}>
                            <Image src={Obj.imageSrc} width={392.37} height={278.52}/>
                        </div>
                        <div className={styles.ExploreInnerImageInfo}>
                              <div className={styles.ExploreInnerImageInfoHeader}>
                                <div className={styles.ExploreInnerImageInfoTitle}>{Obj.foodTitle}</div>
                                <div className={styles.ExploreInnerImageInfoPrice}>{Obj.foodPrice}</div>
                              </div>  
                              <div className={styles.ExploreInnerImageInfoDescription}>{Obj.Description}</div>
                        </div>
                    </div>
                    })
                }
            </div>
        </div>
    </div>
    <div className={styles.AdditionalInfoDiv}>
        <div className={styles.AdditionalInnerDiv}>
            <div className={styles.AdditionalInnerFirstDiv}>
                <div className={styles.AdditionalInnerSeperator}></div>
                <div className={styles.AdditionalInnerTextPart}>
                   <div className={styles.AdditionalInnerDownloadText}>Download app for Exciting Deals</div>
                   <div className={styles.AdditionalInnerDownloadDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </div>
                   <div className={styles.AdditionalInnerDownloadStore}>
                        <div className={styles.AdditionalInnerDownloadPlayStore}>
                            <Image src={PlayStore}  width={211.32} height={80.13}/>
                        </div>
                        <div className={styles.AdditionalInnerDownloadAppStore}>
                            <Image src={AppStore} width={175.32} height={50.13}/>
                        </div>
                   </div>
                </div>
            </div>
            <div className={styles.AdditionalInnerSecondDiv}>
               <div className={styles.AdditionalInnerImageHolder}>
                    <Image src={MobileDevice} height={1000} width={800} className={styles.AdditionalInnerImage} />
               </div>
               <div className={styles.AdditionalInnerDotHolder}>
                  <Dots/>
               </div>
            </div>
        </div>
        <div className={styles.AdditionalInnerDivAfter}>
            <div className={styles.AdditionalInnerFirstDiv}>
                <div className={styles.AdditionalInnerSeperator}></div>
                <div className={styles.AdditionalInnerTextPart}>
                   <div className={styles.AdditionalInnerDownloadText}>Download app for Exciting Deals</div>
                   <div className={styles.AdditionalInnerDownloadDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </div>
                   <div className={styles.AdditionalInnerDownloadStore}>
                        <div className={styles.AdditionalInnerDownloadPlayStore}>
                            <Image src={PlayStore}  width={211.32} height={80.13}/>
                        </div>
                        <div className={styles.AdditionalInnerDownloadAppStore}>
                            <Image src={AppStore} width={175.32} height={50.13}/>
                        </div>
                   </div>
                </div>
            </div>
            <div className={styles.AdditionalInnerSecondDiv}>
               <div className={styles.AdditionalInnerImageHolder}>
                    <Image src={MobileDevice} height={1000} width={800} className={styles.AdditionalInnerImage} />
               </div>
               <div className={styles.AdditionalInnerDotHolder}>
                  <Dots/>
               </div>
            </div>
        </div>
    </div>
    <div className={styles.ContactDiv}>
        <div className={styles.ContactInnerDiv}>
             <div className={styles.ContactInnerInfoDiv}>
                 <div className={styles.ContactInnerHeading}>Get notified <br/>about new amazing products</div>
                 <div className={styles.ContactInnerDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>It has been the industry's standard dummy text ever since. </div>
                 <div className={styles.ContactInnerInputHolder}>
                   <input className={styles.EmailHolder} placeholder="E-mail"></input>
                   <div className={styles.EmailArrowHolder}>
                      <Image src={EmailArrow} width={100} height={100}/>
                   </div>
                 </div>
                 <div className={styles.AdditionalLinks}>
                      <div className={styles.LinkType}>Product</div>
                      <div className={styles.LinkType}>Company</div>
                      <div className={styles.LinkType}>Learn More</div>
                      <div className={styles.LinkType}>Get in touch</div>
                 </div>

             </div>
        </div>
        <div className={styles.SocialMediaLinks}>
                        <div className={styles.SocialMediaInnerLinks}>
                             <div className={styles.SocialMediaType}>
                             <Image src={Twitter} width={16} height={16} />
                             </div>
                             <div className={styles.SocialMediaType}>
                             <Image src={Facebook} width={16} height={16} />
                             </div>
                             <div className={styles.SocialMediaType}>
                             <Image src={Linkedin} width={16} height={16} />
                             </div>
                             <div className={styles.SocialMediaType}>
                             <Image src={Instagram} width={16} height={16} />
                             </div>
                        </div>
                        <div className={styles.SocialMediaText}>© 2019 indianpix</div>
                 </div>
        <div className={styles.LeaveDiv}>
             <Image src={Leaves} width={680.5} height={894.08}/>
        </div>
        <div className={styles.LeaveDivAfter}>
              <Image src={Leaves} width={560.5} height={894.08}/>
        </div>
    </div>
 </div>
}

export default Homepage;