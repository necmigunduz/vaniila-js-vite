import "./TopNavBar.scss";

export const TopNavBar = (container) => {
    container.innerHTML += `<div class="top-nav-bar">
                                <h1>Top Nav Bar</h1>
                                <div class="links">
                                    <a href="/">Home</a>
                                    <a href="/about-me">About me</a>
                                    <a href="/projects">Projects</a>
                                </div>
                            </div>
                            `;
};