import { useRef } from 'react';

interface Props {
	file: string;
}

export default function VideoPlayer({ file }: Props) {
	const videoRef = useRef<HTMLVideoElement>(null);
	function handlePlayClick() {
		videoRef.current?.play();
	}
	function handlePauseClick() {
		videoRef.current?.pause();
	}
	return (
		<>
			<video
				style={{ width: '100%', backgroundColor: 'black' }}
				height="400"
				controls
				src={'./uploads/' + file}
				ref={videoRef}
			></video>
			<button onClick={handlePlayClick}>play</button>
			<button onClick={handlePauseClick}>pause</button>
		</>
	);
}
