import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  categories = ['Япония', 'Древняя Греция', 'Германия', 'Рим', 'Италия'];
  selected = '';

  products = [
    {
      id: 0,
      category: 'Япония',
      name: 'Книга пяти колец',
      description: 'Трактат о стратегии и боевом искусстве, написанный легендарным самураем Миямото Мусаси.',
      rating: 5,
      likes: 0,
      images: ['assets/images/10.jpg'],
      link: 'https://kaspi.kz/shop/p/mijamoto-m-kniga-pjati-kolets-121012419/?c=750000000'
    },
    {
      id: 1,
      category: 'Древняя Греция',
      name: 'Государство',
      description: 'Философский диалог Платона, в котором обсуждается природа справедливости и идеальное государство.',
      rating: 5,
      likes: 0,
      images: ['assets/images/3.jpg'],
      link: 'https://kaspi.kz/shop/p/platon-gosudarstvo-100306569/?c=750000000'
    },
    {
      id: 2,
      category: 'Древняя Греция',
      name: 'Политика',
      description: 'Трактат Аристотеля, посвященный устройству государства и политическим системам.',
      rating: 5,
      likes: 0,
      images: ['assets/images/7.jpg'],
      link: 'https://kaspi.kz/shop/p/aristotel-politika-100625178/?c=750000000'
    },
    {
      id: 3,
      category: 'Германия',
      name: 'Человеческое, слишком человеческое',
      description: 'Книга Ницше, в которой он анализирует мораль, религию и культуру с позиции свободного духа.',
      rating: 5,
      likes: 0,
      images: ['assets/images/1.jpg'],
      link: 'https://kaspi.kz/shop/p/nitsshe-f-chelovecheskoe-slishkom-chelovecheskoe-100423083/?c=750000000'
    },
    {
      id: 4,
      category: 'Германия',
      name: 'Воля к власти',
      description: 'Философские заметки Ницше о власти, морали и развитии сверхчеловека.',
      rating: 5,
      likes: 0,
      images: ['assets/images/8.jpg'],
      link: 'https://kaspi.kz/shop/p/nitsshe-f-v-volja-k-vlasti-102023277/?c=750000000'
    },
    {
      id: 5,
      category: 'Рим',
      name: 'О скоротечности жизни',
      description: 'Философские размышления Сенеки о ценности времени и искусстве жить осознанно.',
      rating: 5,
      likes: 0,
      images: ['/assets/images/9.jpg'],
      link: 'https://kaspi.kz/shop/p/seneka-l-a-o-skorotechnosti-zhizni-105773469/?c=750000000'
    },
    {
      id: 6,
      category: 'Рим',
      name: 'Наедине с собой',
      description: 'Дневниковые записи римского императора Марка Аврелия, пропитанные стоицизмом и мудростью.',
      rating: 5,
      likes: 0,
      images: ['/assets/images/6.jpg'],
      link: 'https://kaspi.kz/shop/p/avrelii-m-naedine-s-soboi-101133476/?c=750000000'
    },
    {
      id: 7,
      category: 'Италия',
      name: 'Государь',
      description: 'Знаменитый трактат Макиавелли о политике, власти и управлении государством.',
      rating: 5,
      likes: 0,
      images: ['/assets/images/2.jpg'],
      link: 'https://kaspi.kz/shop/p/makiavelli-n-gosudar-o-voennom-iskusstve-100313865/?c=750000000'
    },
    {
      id: 8,
      category: 'Рим',
      name: 'Нравственные письма к Луцилию',
      description: 'Сборник писем Сенеки, в которых он рассуждает о добродетели, мудрости и жизненных трудностях.',
      rating: 5,
      likes: 0,
      images: ['/assets/images/5.jpg'],
      link: 'https://kaspi.kz/shop/p/seneka-nravstvennye-pis-ma-k-lutsiliju-100271302/?c=750000000'
    },
    {
      id: 9,
      category: 'Германия',
      name: 'По ту сторону добра и зла',
      description: 'Ницше подвергает критике традиционную мораль и предлагает новую философию жизни.',
      rating: 5,
      likes: 0,
      images: ['assets/images/4.jpg'],
      link: 'https://kaspi.kz/shop/p/nitsshe-f-po-tu-storonu-dobra-i-zla-100625063/?c=750000000'
    }
  ];

  getfilteredProducts() {
    if (!this.selected) {
      return this.products;
    }
    
    return this.products.filter(product => product.category === this.selected);
  }

  selectCategory(event: any) {
    this.selected = event.target.value;
  }

  removeProduct(id: number) {
    var newProducts = []
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id !== id) {
        newProducts.push(this.products[i]);
      }
    }
    this.products = newProducts;
  }

  likeProduct(id: number) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i].likes += 1;
      }
    }
  }

  shareProduct(link: string, platform: string) {
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    }
    window.open(shareUrl, '_self');
  }
}
