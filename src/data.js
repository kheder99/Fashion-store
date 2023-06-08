import controller from '../src/images/ps4.jpg';
import nike from '../src/images/nike2.webp';
import ring from '../src/images/ring.jpg';
import controllerFront from '../src/images/controller_front.jpg';
import controllerBack from '../src/images/controller_top.jpg';
import nike2 from '../src/images/nike3.webp';
import nike3 from '../src/images/nike.jpg';
import ring2 from '../src/images/ring2.jpg';
import ring3 from '../src/images/ring3.jpg';

const products = [
    {"id":1, "src": controller, "name": 'Wireless controller for PS4', "price": 64.99, "sides_images": [controller, controllerFront,controllerBack]},
    {"id":2, "src": nike, "name": 'Nike Sport White-Man Pant', "price": 50.5, "sides_images": [nike, nike2,nike3]},
    {"id":3, "src": ring, "name": 'CHANNEL Diamond Ring ', "price": 36.2, "sides_images": [ring, ring2,ring3]},
];

export default products