import { useRef } from 'react';

export default function VideoPlayer({ file }: { file: string }) {
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
