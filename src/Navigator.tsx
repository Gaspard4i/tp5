import { useState } from 'react';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

// typage useState
type PageId = 'list' | 'detail'; // enum des pages autorisées
interface PageParams {
	id?: number;
}
interface NavigationState {
	currentPage: PageId;
	params: PageParams;
}

// création et export d'un type commun pour les props de VideoList et VideoDetail
// attention : crée des dépendances (imports) croisées VideoXXX <-> Navigator
// c'est moche mais on réglera ça dans un prochain TP
export interface PageProps {
	navigate: (newPage: PageId, newParams?: PageParams) => void;
	params: PageParams;
}

export default function Navigator() {
	const [{ currentPage, params }, setNavigationState] =
		useState<NavigationState>({
			currentPage: 'list',
			params: {},
		});

	function navigate(newPage: PageId, newParams: PageParams = {}) {
		setNavigationState({ currentPage: newPage, params: newParams });
	}

	switch (currentPage) {
		case 'list':
			return <VideoList navigate={navigate} params={params} />;
		case 'detail':
			return <VideoDetail navigate={navigate} params={params} />;
	}
	return null;
}
