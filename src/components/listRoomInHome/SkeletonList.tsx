import Skeleton from '@mui/material/Skeleton';
import styles from './listRoomInHome.module.scss';

export default function SkeletonList() {
	return (
		<>
			<div className={styles.items}>
				<Skeleton
					variant="rectangular"
					width={140}
					height={17}
					style={{ borderRadius: '5px', marginTop: '2px' }}
				/>
				<Skeleton
					variant="rectangular"
					width={140}
					height={17}
					style={{ borderRadius: '5px', marginTop: '2px' }}
				/>
				<Skeleton
					variant="rectangular"
					width={140}
					height={17}
					style={{ borderRadius: '5px', marginTop: '2px' }}
				/>
				<Skeleton
					variant="rectangular"
					width={140}
					height={17}
					style={{ borderRadius: '5px', marginTop: '2px' }}
				/>
				<Skeleton
					variant="rectangular"
					width={140}
					height={17}
					style={{ borderRadius: '5px', marginTop: '2px' }}
				/>
				<Skeleton
					variant="rectangular"
					width={140}
					height={17}
					style={{ borderRadius: '5px', marginTop: '2px' }}
				/>
				<Skeleton
					variant="rectangular"
					width={140}
					height={17}
					style={{ borderRadius: '5px', marginTop: '2px' }}
				/>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Skeleton
					variant="rectangular"
					width={270}
					height={14}
					style={{ borderRadius: '5px', margin: '20px 0 10px 5px' }}
				/>
				<Skeleton
					variant="rectangular"
					width={150}
					height={30}
					style={{ borderRadius: '5px', margin: '10px' }}
				/>
			</div>
		</>
	);
}
