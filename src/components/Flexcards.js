import styled from "styled-components";
const options=styled.div`
$optionDefaultColors:
#ed5565,#fc6e51,#ffce54,#2ecc71,#5d9cec,#ac92ec;

body {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 100vh;

    font-family: 'Roboto', sans-serif;
    transition: 25s;

    @include dark {
        background: #232223;
        color: white;
    }
    .credit {
        position: absolute;
        bottom: 20px;
        left: 20px;

        color: inherit;
    }
    .options {
        display: flex;
        flex-direction: row;
    }
    
    @for $i from 1 through 4 {
        media screen and (max-width: 798px -$i*80){
            min-width: 600px - $i*80;
            .option:nth-child(#{6-$i}) {
                display: none;
            }
        }
    }

    .option {
        position: relative;
        overflow: hidden;

        min-width: 60px;
        margin: 10px;

        background:var(--optionBackground, var(--defaultBackground, #e6e9ed));
        background-size: auto 120%;
        background-position: center;
        cursor: pointer;
        transition: .5s cubic-bezier(0.05, 0.61, 0.41, 0.95);

        @for $i from 1 through length($optionDefaultColours) {
            &:nth-child(#{$i}) {
                --defaultBackground:#
                {nth($optionDefaultColours, $i)};
            }
        }
    }

}
`


function Flexcards() {
    return(
        <><options>

      
            <div class="option active" style="--optionBackground:url(https://github.com/Abraar117/BootstrapPrac/blob/main/background1.png)">
                <div class="shadow"></div>
                <div class="label">
                    <div class="icon">
                        <i class="fas fa-walking"></i>
                    </div>
                    <div class="info">
                        <div class="main">jffjfes</div>
                        <div class="sub">iuhjiofehsfs</div>
                    </div>
                </div>
            </div>
            </options>
        <div class="option">
                <div style="--optionBackground:url(https://github.com/Abraar117/BootstrapPrac/blob/main/background2.png)">
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <i class="fas fa-snowflake"></i>
                        </div>
                        <div class="info">
                            <div class="main">jffjfes</div>
                            <div class="sub">iuhjiofehsfs</div>
                        </div>
                    </div>
                s</div><i></i>
            </div></>
    )
}