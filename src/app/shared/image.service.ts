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


    //dental care
    '1': '/images/offerImage/1.png',
    '2': '/images/offerImage/2.png',
    '3': '/images/offerImage/3.png',
    '4': '/images/offerImage/4.png',
    '5': '/images/offerImage/5.png',
    '6': '/images/offerImage/6.png',
    '7': '/images/offerImage/7.png',
    '8': '/images/offerImage/8.png',
    '9': '/images/offerImage/9.png',
    '10': '/images/offerImage/10.png',
    '11': '/images/offerImage/11.png',
    '12': '/images/offerImage/12.png',
    '13': '/images/offerImage/13.png',
    '14': '/images/offerImage/14.png',
    '15': '/images/offerImage/15.png',
    '16': '/images/offerImage/16.png',
    '80': '/images/offerImage/74.png',




    //Laser
    '17': '/images/offerImage/17.png',
    '18': '/images/offerImage/18.png',
    '19': '/images/offerImage/19.png',
    '20': '/images/offerImage/20.png',
    '21': '/images/offerImage/21.png',
    '22': '/images/offerImage/22.png',
    '23': '/images/offerImage/23.png',
    '24': '/images/offerImage/24.png',
    '25': '/images/offerImage/25.png',

    //Hair
    // '24': '/images/offerImage/24.png',
    '26': '/images/offerImage/26.png',
    '27': '/images/offerImage/27.png',
    '28': '/images/offerImage/28.png',



    //skin
    '29': '/images/offerImage/29.png',
    '30': '/images/offerImage/30.png',
    '31': '/images/offerImage/31.png',
    '32': '/images/offerImage/32.png',
    '33': '/images/offerImage/33.png',
    '34': '/images/offerImage/34.png',
    '35': '/images/offerImage/35.png',
    '36': '/images/offerImage/36.png',


    //beauty
    '37': '/images/offerImage/37.png',
    '38': '/images/offerImage/38.png',
    '39': '/images/offerImage/39.png',
    // '32': '/images/offerImage/32.png',
    // '28': '/images/offerImage/28.png',
    '40': '/images/offerImage/40.png',
    '47': '/images/offerImage/41.png',
    '48': '/images/offerImage/42.png',
    '49': '/images/offerImage/43.png',
    '50': '/images/offerImage/44.png',
    // '21': '/images/offerImage/21.png',
    '51': '/images/offerImage/45.png',




    //fitness
    '52': '/images/offerImage/46.png',
    '53': '/images/offerImage/47.png',
    '54': '/images/offerImage/48.png',
    '55': '/images/offerImage/49.png',
    '56': '/images/offerImage/50.png',
    '57': '/images/offerImage/51.png',
    '58': '/images/offerImage/52.png',
    '59': '/images/offerImage/53.png',
    '60': '/images/offerImage/54.png',
    '61': '/images/offerImage/55.png',
    '62': '/images/offerImage/56.png',





    //scan
    '63': '/images/offerImage/57.png',

    //ob-gyn
    '64': '/images/offerImage/58.png',
    '65': '/images/offerImage/59.png',

    //kidney
    '66': '/images/offerImage/60.png',
    //general surgery
    '67': '/images/offerImage/61.png',
    '68': '/images/offerImage/62.png',
    '69': '/images/offerImage/63.png',

    //gastro-im
    '70': '/images/offerImage/64.png',
    '71': '/images/offerImage/65.png',
    '72': '/images/offerImage/66.png',
    '73': '/images/offerImage/67.png',
    '74': '/images/offerImage/68.png',
    '75': '/images/offerImage/69.png',
    '76': '/images/offerImage/70.png',
    //psychiatry
    '77': '/images/offerImage/71.png',
    '78': '/images/offerImage/72.png',
    '79': '/images/offerImage/73.png',











  };


  getOfferImage(imageId: string): string {
    // return this.imgs[imageId] || 'https://via.placeholder.com/375x180';
    return this.imgs[imageId] || '/images/offerImage/default.png';

  }


  // getImagePath(doctorId: string): string {
  //   return this.images[doctorId] || 'images/doctorImg/default.png'; // Return a default image if the ID is not found
  // }

}



