document.addEventListener('DOMContentLoaded', () => {
    const hero = document.getElementById('hero');
    const heroVideo = document.getElementById('heroVideo')

    if(heroVideo){
        const timer = setTimeout(() => {
            startTransition();
        }, 6500);

        // 動画の再生が完了したときのイベント
        heroVideo.addEventListener('ended', () => {
            clearTimeout(timer);
            startTransition();
        });
        function startTransition(){
            if(hero.classList.contains('is-transitioning')) return;
            // 1. カーテンアニメーションを開始
            hero.classList.add('is-transitioning');
            // 2. カーテンが画面を完全に覆う中間タイミング（0.4秒後）で背景を完成画像に切り替え
            setTimeout(() => {
                hero.classList.add('is-finished');
            }, 400);
        }
    }
});