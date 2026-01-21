import React, { useRef, useEffect } from 'react';

const StarBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;

        const stars = [];
        const numStars = 80;

        class Star {
            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * 0.2;
                this.vy = (Math.random() - 0.5) * 0.2;
                this.radius = Math.random() * 2 + 1;
                this.color = Math.random() > 0.8 ? '#00f6ff' : '#ffffff'; // Occasional cyan star
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0) this.x = w;
                if (this.x > w) this.x = 0;
                if (this.y < 0) this.y = h;
                if (this.y > h) this.y = 0;
            }

            draw() {
                ctx.beginPath();
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 5;
                ctx.shadowColor = this.color;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }

        const animate = () => {
            ctx.clearRect(0, 0, w, h);

            stars.forEach((star, index) => {
                star.update();
                star.draw();

                // Connect stars
                for (let j = index + 1; j < stars.length; j++) {
                    const otherStar = stars[j];
                    const distance = Math.sqrt(
                        Math.pow(star.x - otherStar.x, 2) + Math.pow(star.y - otherStar.y, 2)
                    );

                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(42, 14, 97, ${1 - distance / 120})`; // Deep Purple connection
                        ctx.lineWidth = 1;
                        ctx.moveTo(star.x, star.y);
                        ctx.lineTo(otherStar.x, otherStar.y);
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />;
};

export default StarBackground;
