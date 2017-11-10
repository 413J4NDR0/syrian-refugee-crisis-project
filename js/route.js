$('#europe').css({
    "display": "block",
    "margin": "auto",
    "width": "40%",

})
var index = -1;
for (var j = 0; j < countries.length; j++) {
    countries[j].node.setAttribute('stroke', '#000');
    countries[j].node.setAttribute('fill', '#000');
}
SY.node.setAttribute('fill', '#abc')
SY.node.setAttribute('stroke', '#abc')
var state = true;
var TRt = "At the peak of the refugee crisis in October 2015, there were 6,828 Aegean sea arrivals per day; in response the EU and Turkey drafted a resolution to limit and deter irregular crossings in March 2016. By October 2016 sea arrivals had fallen to 96 per day in response to the resolution and the official closure of the Balkans Route. 99% of crossings are by the Aegean Sea, as opposed to the land route through the Turkish Thrace."
var GRt = "Though hundreds of thousands of refugees have crossed into Greece since 2015, the overwhelming majority continue northward. In 2015 516,000 Syrians crossed into Greece, while in 2016 83,000 Syrians crossed. The proportion of deaths crossing the Aegean Sea increased from 1 in 1,072 in 2015 to 1 in 393 in 2016."
var BGt = "Bulgaria borders the Turkish Thrace and is an occasional alternate to the Aegean Sea. There have been complaints by refugees that authorities in Bulgaria forcibly deport refugees while ignoring their claims for international protection, an issue found throughout Southern Europe. Bulgaria continued construction of a border fence in 2016, similar to a Greek fence built in 2012. Bulgaria has received 20,113 (2.1%) Syrian refugee asylum petitions from April 2011 to May 2017, though many asylum seekers continue onward due to conditions in the country."
var MKt = "Macedonia and Serbia were the main countries that refugees crossed en masse to reach central Europe, but as border restrictions increased in Hungary and throughout the Balkans, this route splintered into neighboring countries (purple) and became riskier. As in Bulgaria, there have been testimonies from refugees of being forcibly deported without due process of their protection claims."
var HUt = "In response to the large amount of refugees crossing their southern border, The Hungarian Government built a fence with the Balkans by the end of 2015, stifling and disrupting the flow of refugees. Hungary has since placed various other border restrictions, such as deporting those aprehended within 8km of the border. Unlike much of Southern Europe, Hungary receives significant amounts of asylum petitions from Syrians: 76,886 (8%) Syrian asylum petitions from April 2011 to May 2017, though like Bulgaria many Syrian asylum seekers continue northward."
var ATt = "Unlike Hungary, Austria has been passive in regards to their borders. Austria has attempted to mediate the aggressive border policy of Hungary and pro-refugee policies of Germany, to mixed results. Like Hungary, Austria receives a significant amount of asylum petitions from Syrian refugees: 47,347 (5%) petitions from April 2011 to May 2017."
var DEt = "Germany's pro-refugee policies following the death of Alan Kurdi have resulted in a massive influx of refugees since September 2015. Germany accounts for a staggering 52% of Syrian asylum petitions in Europe, with 500,819 petitions from April 2011 to May 2017."
var NLt = "The Netherlands, Denmark and Belgium are auxillary target countries that have received 33,897 (3.6%), 20,299 (2.1%) and 19,009 (1.9%) Syrian asylum petitions, repsectively. Together, the Netherlands, Denmark, Hungary, Austria, Bulgaria and Belgium account for 23% of asylum applications in Europe."
var SEt = "Sweden receives the second most asylum applications and has the second largest Syrian refugee population in Europe, in part driven by the permanent residency granted to Syrian asylum seekers. Sweden accounts for 11.7% of asylum applications in Europe, with 111,688 from April 2011 - May 2017. Together, Germany and Sweden account for 65% of Syrian asylum petitions in Europe."
var routeText = [TRt, GRt, BGt, MKt, MKt, HUt, ATt, DEt, NLt, NLt, NLt, SEt];
var routeList = [TR, GR, BG, MK, RS, HU, AT, DE, BE, NL, DK, SE];
var routeName;
var routeColor = ["#2f3f4f", "#3f4f5f", "#374757", "#475767", "#4f5f6f", "#3f4f5f", "#5f6f7f", "#6f7f8f", "#7f8f9f", "#8797a7","#8f9faf", "#8f9faf", "#9fafbf"];

$("#seaRoute").click(function () {
    for (var j = 0; j < routeList.length; j++) {
        nonColor(j);
    }
    state = false;
    $(".info").css({
        "width": "auto",
        "text-align": "justify"
    });
    $galleryWrap.css({
        'top': '-99999px',
        'left': '-99999px'
    });
    document.getElementById('cn').innerHTML = '';
    document.getElementById('rs').innerHTML = '';
    document.getElementById('mt').innerHTML = 'Alternate Sea Route';
    
    index = -1;
    routeList = [IT, ES]
    routeColor = ["#5f4f5f", "#4f5f4f"]
    routeName = ['Alternate Sea Route: Italy', 'Alternate Sea Route: Spain']
    var italyText = "Although the Central Mediterranean Route through Italy surpassed the Greek Route in terms of volume in April 2016 and has become the primary entry way for refugees, Syrian refugees only constituted 0.7% of the 181,436 migrants using this route in 2016. Instead, the maritime route through Italy is mainly used by refugees fleeing conflicts in Sub-Saharan Africa. The majority of refugees taking this route depart from either Libya and Egypt, with much smaller numbers from Tunisia, Algeria, Greece and even Turkey. Following the restrictions placed in the Balkans, there was a slight increase in the usage of this route.";
    var spainText = "The Western Mediterranean route has a much smaller total volume than its eastern and central counterparts, with 14,094 total arrivals in 2016. However, unlike Italy or Greece, Spain posesses two enclaves along the North Coast of Africa, Ceuta and Melilla, which allow overland passage into Spain without crossing the Mediterranean. Melilla in particular received 7,164 Syrian refugees in 2015 and 1,925 in 2016. Syrian women and children constitute the majority of refugees arriving into Spain through these enclaves, though Syrians made up less than one percent of sea arrivals to mainland Spain in 2016.";
    routeText = [italyText, spainText]
})

$("#mainRoute").click(function () {
    for (var j = 0; j < routeList.length; j++) {
        nonColor(j);
    }
    state = true;
    $(".info").css({
        "width": "auto",
        "text-align": "justify"
    });
    $galleryWrap.css({
        'top': '-99999px',
        'left': '-99999px'
    });
    document.getElementById('cn').innerHTML = '';
    document.getElementById('rs').innerHTML = '';
    document.getElementById('mt').innerHTML = 'Main Route Taken by Syrian Refugees';

    index = -1;
    routeText = [TRt, GRt, BGt, MKt, MKt, HUt, ATt, DEt, NLt, NLt, NLt, SEt];
    routeList = [TR, GR, BG, MK, RS, HU, AT, DE, BE, NL, DK, SE];
    routeColor = ["#2f3f4f", "#3f4f5f", "#374757", "#475767", "#4f5f6f", "#3f4f5f", "#5f6f7f", "#6f7f8f", "#7f8f9f", "#8797a7", "#8f9faf", "#8f9faf", "#9fafbf"];
})

function route(index) {
    var stop = routeList[index]
    $(".info").css({
        "width": "450px",
        "text-align": "justify"
    });
    document.getElementById('cn').innerHTML = stop.data('cn');
    document.getElementById('rs').innerHTML = routeText[index];
    stop.node.setAttribute('fill', routeColor[index])
    stop.node.setAttribute('stroke', routeColor[index])
    if (stop.data('sr') != null) {
        if (!state) {
            document.getElementById('mt').innerHTML = routeName[index];
        }
        for (var j = 0; j < stop.data('sr').length; j++) {
            stop.data('sr')[j].node.setAttribute('stroke', stop.data('sc')[j]);
            stop.data('sr')[j].node.setAttribute('fill', stop.data('sc')[j]);
        }
    }
    visGal(routeList[index])
}

function nonColor(index) {
    var stop = routeList[index]
    stop.node.setAttribute('fill', "#000")
    stop.node.setAttribute('stroke', "#000")
    if (stop.data('sr') != null) {
        if (!state) {
            document.getElementById('mt').innerHTML = routeName[index];
        }
        for (var j = 0; j < stop.data('sr').length; j++) {
            stop.data('sr')[j].node.setAttribute('stroke', "#000");
            stop.data('sr')[j].node.setAttribute('fill', "#000");
        }
    }
}
$("#nextC").click(function () {
    if (index < routeList.length - 1) {
        route(index += 1);
        $('html, body').animate({
            scrollTop: $("#routes").offset().top
        }, 10);
    }
})
$("#prevC").click(function () {
    if (index > 0) {
        nonColor(index);
        route(index -= 1);
        $('html, body').animate({
            scrollTop: $("#routes").offset().top
        }, 10);
    }
})
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }

    switch (event.key) {
        case "ArrowDown":
            if (index > 0) {
                nonColor(index);
                route(index -= 1);
                $('html, body').animate({
                    scrollTop: $("#routes").offset().top
                }, 10);
            }
            break;
        case "ArrowUp":
            if (index < routeList.length - 1) {
                route(index += 1);
                $('html, body').animate({
                    scrollTop: $("#routes").offset().top
                }, 10);
            }
            break;
        case "ArrowLeft":
            if (ready) {
                plusSlides(-1)
                $('html, body').animate({
                    scrollTop: $("#routes").offset().top
                }, 10);
            }
            break;
        case "ArrowRight":
            if (ready) {
                plusSlides(1)
                $('html, body').animate({
                    scrollTop: $("#routes").offset().top
                }, 10);
            }
            
            break;
        default:
            return;
    }
    event.preventDefault();
}, true);