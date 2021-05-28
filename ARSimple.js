import React, { useState } from 'react';

import {
  ViroARScene,
  Viro3DObject,
  ViroAmbientLight,
  ViroQuad,
	ViroNode
} from '@viro-community/react-viro';

// -kiri/+kanan, -bawah/+atas, -depan/+belakang
const dummy_data = [
	{no: 1, position: [1, 1, -.5] },
	{no: 2, position: [1, .15, 0] },
	{no: 3, position: [2, .15, 0] },
	{no: 4, position: [2, 1, 0] },
	{no: 5, position: [2, .15, -.5] },
	{no: 6, position: [-2, .15, -.5] },
	{no: 7, position: [-2, .15, 0] },
	{no: 8, position: [-.4, 1, -1] }
]

const ARSimple = () => {
	const [data, setData] = useState(dummy_data);

	return (
		<ViroARScene>

			<ViroAmbientLight color={"#aaaaaa"} influenceBitMask={1} />

			{ renderObject() }
			
			<ViroQuad
				rotation={[-90,0,0]}
				width={.5} height={.5}
				arShadowReceiver={true}
				lightReceivingBitMask={4} />

		</ViroARScene>
	)

	function renderObject() {
		var renderedObjects = [];
		if(data) {
			for(var i=0; i<data.length; i++){
				const number = i;
				var obj = data[i];
				renderedObjects.push(
					<ViroNode key={'list-'+i.toString()} position={[0, 0, 0]}>
						<Viro3DObject
							source={require('./res/object_soccerball/object_soccer_ball.vrx')}
							position={obj.position}
							scale={[.3, .3, .3]}
							type="VRX"
							lightReceivingBitMask={5}
							shadowCastingBitMask={4}
							highAccuracyEvents={true}
							transformBehaviors={['billboardY']}
							resources={[require('./res/object_soccerball/object_soccer_ball_diffuse.png'),
													require('./res/object_soccerball/object_soccer_ball_normal.png'),
													require('./res/object_soccerball/object_soccer_ball_specular.png')]}
							onClick={(position, source)=>{
								alert('Bola '+(number+1)+' didapatkan!');
								var new_data = [...data];
								new_data.splice(number, 1);
								setData(new_data);
							}}
						/>
					</ViroNode>
				);
			}
		}
    return renderedObjects;
	}
}

export default ARSimple;