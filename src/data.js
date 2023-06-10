import controller from '../src/images/k/ps4.jpg';
import nike from '../src/images/k/nike2.webp';
import ring from '../src/images/k/ring.jpg';
import controllerFront from '../src/images/k/controller_front.jpg';
import controllerBack from '../src/images/k/controller_top.jpg';
import nike2 from '../src/images/k/nike3.webp';
import nike3 from '../src/images/k/nike.jpg';
import ring2 from '../src/images/k/ring2.jpg';
import ring3 from '../src/images/k/ring3.jpg';

const products = [
    {"id":1, "src": controller, "name": 'Wireless controller for PS4', "price": 64.99, "sides_images": [controller, controllerFront,controllerBack]},
    {"id":2, "src": nike, "name": 'Nike Sport White-Man Pant', "price": 50.5, "sides_images": [nike, nike2,nike3]},
    {"id":3, "src": ring, "name": 'CHANNEL Diamond Ring ', "price": 36.2, "sides_images": [ring, ring2,ring3]},
];

export default products