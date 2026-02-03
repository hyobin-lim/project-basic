// 슬라이더 기능
class Slider {
    constructor(container) {
        this.container = container;
        this.currentSlide = 2;
        this.totalSlides = 5;
        this.isPlaying = true;
        this.interval = null;

        this.init();
    }

    init() {
        const prevBtn = this.container.querySelector('.slider-btn.prev');
        const nextBtn = this.container.querySelector('.slider-btn.next');
        const pauseBtn = this.container.querySelector('.slider-btn.pause');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prev());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.next());
        }

        if (pauseBtn) {
            pauseBtn.addEventListener('click', () => this.togglePlay());
        }

        this.startAutoPlay();
    }

    prev() {
        this.currentSlide = this.currentSlide === 1 ? this.totalSlides : this.currentSlide - 1;
        this.updateCounter();
    }

    next() {
        this.currentSlide = this.currentSlide === this.totalSlides ? 1 : this.currentSlide + 1;
        this.updateCounter();
    }

    togglePlay() {
        this.isPlaying = !this.isPlaying;

        if (this.isPlaying) {
            this.startAutoPlay();
        } else {
            this.stopAutoPlay();
        }
    }

    startAutoPlay() {
        this.interval = setInterval(() => {
            this.next();
        }, 5000);
    }

    stopAutoPlay() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    updateCounter() {
        const counter = this.container.querySelector('.slider-counter');
        if (counter) {
            const formatted = String(this.currentSlide).padStart(2, '0');
            const total = String(this.totalSlides).padStart(2, '0');
            counter.textContent = `${formatted} — ${total}`;
        }
    }
}

// 스크롤 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 애니메이션 대상 요소
document.addEventListener('DOMContentLoaded', () => {
    // 슬라이더 초기화
    const popupSlider = document.querySelector('.popup-slider');
    if (popupSlider) {
        new Slider(popupSlider);
    }

    const awarenessSlider = document.querySelector('.awareness-slider');
    if (awarenessSlider) {
        new Slider(awarenessSlider);
    }

    // 애니메이션 적용
    const animatedElements = document.querySelectorAll(
        '.content-item, .org-item, .quick-link-item, .info-card'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // 호버 효과
    const hoverItems = document.querySelectorAll('.content-item, .org-item');
    hoverItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// 검색 기능
const searchBox = document.querySelector('.search-box');
if (searchBox) {
    const input = searchBox.querySelector('input');
    const button = searchBox.querySelector('button');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        const query = input.value.trim();
        if (query) {
            console.log('검색어:', query);
            // 실제 검색 기능 구현
        }
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            button.click();
        }
    });
}

// 모바일 메뉴
const chatBtn = document.querySelector('.chat-btn');
if (chatBtn) {
    chatBtn.addEventListener('click', () => {
        console.log('채팅 버튼 클릭');
        // 채팅 기능 구현
    });
}
