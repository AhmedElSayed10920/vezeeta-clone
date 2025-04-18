import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  public images: { [key: string]: string } = {
    '1': 'images/doctorImg/1.png',
    '2': 'images/doctorImg/2.png',
    '3': 'images/doctorImg/3.png',
    '4': 'images/doctorImg/4.png',
    '5': 'images/doctorImg/5.png',
    '6': 'images/doctorImg/6.png',
    '7': 'images/doctorImg/7.png',
    '8': 'images/doctorImg/8.png',
    '9': 'images/doctorImg/9.png',
    '10': 'images/doctorImg/10.png',
    '11': 'images/doctorImg/11.png',
    '12': 'images/doctorImg/12.png',
    '13': 'images/doctorImg/13.png',
    '14': 'images/doctorImg/14.png',
    '15': 'images/doctorImg/15.png',
    '16': 'images/doctorImg/16.png',
    '17': 'images/doctorImg/17.png',
    '18': 'images/doctorImg/18.png',
    '19': 'images/doctorImg/19.png',
    '20': 'images/doctorImg/20.png',
    '21': 'images/doctorImg/21.png',
    '22': 'images/doctorImg/22.png',
    '23': 'images/doctorImg/23.png',
    '24': 'images/doctorImg/24.png',
    '25': 'images/doctorImg/25.png',
    '26': 'images/doctorImg/26.png',
    '27': 'images/doctorImg/27.png',
    '28': 'images/doctorImg/28.png',
    '29': 'images/doctorImg/29.png',
    '30': 'images/doctorImg/30.png',
    '31': 'images/doctorImg/31.png',
    '32': 'images/doctorImg/32.png',
    '33': 'images/doctorImg/33.png',
    '34': 'images/doctorImg/34.png',
    '35': 'images/doctorImg/35.png',
    '36': 'images/doctorImg/36.png',
    '37': 'images/doctorImg/37.png',
    '38': 'images/doctorImg/38.png',
    '39': 'images/doctorImg/39.png',
    '40': 'images/doctorImg/40.png',
    '41': 'images/doctorImg/41.png',
    '42': 'images/doctorImg/42.png',
    '43': 'images/doctorImg/43.png',
    '44': 'images/doctorImg/44.png',
    '45': 'images/doctorImg/45.png',
    '46': 'images/doctorImg/46.png',
    '47': 'images/doctorImg/47.png',
    '48': 'images/doctorImg/48.png',
    '49': 'images/doctorImg/49.png',
    '50': 'images/doctorImg/50.png',
    '51': 'images/doctorImg/51.png',
    '52': 'images/doctorImg/52.png',
    '53': 'images/doctorImg/53.png',
    '54': 'images/doctorImg/54.png',
    '55': 'images/doctorImg/55.png',
    '56': 'images/doctorImg/56.png',
    '57': 'images/doctorImg/57.png',
    '58': 'images/doctorImg/58.png',
    '59': 'images/doctorImg/59.png',
    '60': 'images/doctorImg/60.png',
    '61': 'images/doctorImg/61.png',
    '62': 'images/doctorImg/62.png',
    '63': 'images/doctorImg/63.png',
    '64': 'images/doctorImg/64.png',
    '65': 'images/doctorImg/65.png',
    '66': 'images/doctorImg/66.png',
    '67': 'images/doctorImg/67.png',
    '68': 'images/doctorImg/68.png',
    '69': 'images/doctorImg/69.png',
    '70': 'images/doctorImg/70.png',

  };
  constructor() { }

  getImagePath(doctorId: string): string {
    return this.images[doctorId] || 'images/doctorImg/default.png'; // Return a default image if the ID is not found
  }


  public imgs: { [key: string]: string } = {
 
  "1": "https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520240808112857341.png",
  "2": "https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520240516111420583.png",
  "3": "https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/metal_braces/desktop.webp",
  "4": "https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250209103619748.png",
  "5": "https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250409120005454.png",
  "6": "https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250409113349381.png",
  "7": "https://voffers.s3-eu-west-1.amazonaws.com/Images/375x180/32546716520241013021327921.png",
  "8": "https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520230613115550518.png",
  "9": "https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250225125111530.png",
  "10": "https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250406142618773.png",
  "11": "https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520240129084212886.png",
  "12": "https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520240710085747347.png",
  "13": "https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250207135913372.png",
  "14": "https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250308191348717.png",
  "15": "https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520241231204542818.png",
  "16": "https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520241222185302596.png",
  "17": "https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250115154607464.png",
  "18": "https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520200313144835045.png",
  "19": "https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520241126095602936.png",
  "20": "https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250121115348302.png",







  };


  getOfferImage(imageId: string): string {
    return this.imgs[imageId] || 'https://via.placeholder.com/375x180'; 
  }

}



