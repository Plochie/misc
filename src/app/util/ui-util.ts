export class UiUtil {

    public static goToTop() {
        const scrollToTop = window.setInterval(() => {
            let pos = window.pageYOffset;
            if (pos > 0) {
              window.scrollTo(0, pos - 10); // how far to scroll on each step
            } else {
              window.clearInterval(scrollToTop);
            }
          }, 8);
    }

}