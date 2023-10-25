import React from 'react';
import './Honey.css';

const Honey = () => {
    return (
        <div className="honey">
            <h2>Our Honey</h2>
            <div className="honey">
                <img src = {process.env.PUBLIC_URL + '/images/honey.jpg'} alt="Honey" style={{maxWidth: '400px', height: '200px', float:"right"}}/>
            <p>We take great pride in the art of honey harvesting.Our first year we had ours bees, 
        we did weakly hive inspections. Upon one inspection, one of out frames fell apart and we had to harvest the honey
        from that frame. We were amazed at the taste of the honey. We replaced the broken frame with a new one in hopes they would make
        more for the following year. Our bees made it through out mild Texas winter and were all a buzz
        the next spring with everything blooming. In spring we did another inspection and found that they had filled up every frame in the 
        hive so we needed to help them out. We remove 3 frames and replaced with new ones. 
        We then harvest the honey from the three frames. The honey from those frames was so tasty that we handed out small bottle to all of the 
        neighbors. </p>
        <p> Come that summer, Texas had a drought. We left the hive alone and made sure there was plenty of water near by if they need it.
        We did a hive inspection near the end of the drought to make sure things were still going good. The bees had filled all the frames again, so we replaced three full ones with three new ones. 
        The honey from the three harvested frames was a darker than normal color. Tasting it, you could taste hints of
        pecan and mesquite. After doing some research we found that during a drought bees will actully harvest the sap 
        from pecan trees giving the honey a unique taste know as honeydew honey.

      </p>
        </div>
        </div>
    );
}

export default Honey;