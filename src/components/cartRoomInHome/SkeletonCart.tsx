import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function SkeletonCart() {
	return (
		<Stack spacing={0.8}>
			<Skeleton
				variant="rectangular"
				width={200}
				height={35}
				style={{ borderRadius: '5px', margin: '0 auto 10px auto' }}
			/>
			<Skeleton variant="rectangular" width={250} height={17} style={{ borderRadius: '5px' }} />
			<Skeleton variant="rectangular" width={250} height={17} style={{ borderRadius: '5px' }} />
			<Skeleton variant="rectangular" width={250} height={17} style={{ borderRadius: '5px' }} />
			<Skeleton variant="rectangular" width={250} height={17} style={{ borderRadius: '5px' }} />
			<Skeleton variant="rectangular" width={250} height={17} style={{ borderRadius: '5px' }} />
			<Skeleton variant="rectangular" width={250} height={17} style={{ borderRadius: '5px' }} />
			<Skeleton variant="rectangular" width={250} height={17} style={{ borderRadius: '5px' }} />
			<Skeleton
				variant="rectangular"
				width={150}
				height={30}
				style={{ borderRadius: '5px', margin: '15px auto 10px auto' }}
			/>

			<Skeleton
				variant="rectangular"
				width={270}
				height={14}
				style={{ borderRadius: '5px', marginTop: '40px' }}
			/>
		</Stack>
	);
}
