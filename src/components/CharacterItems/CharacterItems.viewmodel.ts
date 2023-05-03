import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import { peopleService } from 'services/People.service';

import {
  setCharacterItems,
  getCharacterItems,
  setPages,
  getCharacterPages,
  CharacterType,
} from 'store/CharacterItems';

export const CharacterItemsViewModel = () => {
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const characterItems = useSelector(getCharacterItems);
  const characterPages = useSelector(getCharacterPages);

  const fetchCharacter = useCallback(
    ({ page }: { page?: string } = {}) => {
      setLoading(true);

      try {
        peopleService
          .getPeople({
            params: {
              page,
            },
          })
          .then(({ data }) => {
            const _data = data.results.map((item: CharacterType) => {
              const match = item.url.match(/\/([^/]+)\/?$/);
              const id = match ? match[1] : null;
              return {
                ...item,
                id,
              };
            });
            dispatch(setCharacterItems(_data));
            dispatch(setPages(Math.ceil(data.count / 10)));
          })
          .finally(() => {
            setLoading(false);
          });
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    },
    [dispatch]
  );

  const handleChangePage = useCallback(
    (e: any, page: any) => {
      setPage(page);
      fetchCharacter({
        page,
      });
      setSearchParams({
        page,
      });
    },
    [fetchCharacter, setSearchParams]
  );

  const onClick = useCallback(
    (id: string) => {
      navigate(`character/${id}`);
    },
    [navigate]
  );

  useEffect(() => {
    const page = searchParams.get('page');

    fetchCharacter({
      page,
    });

    if (page) {
      setPage(Number(page));
    }

    return () => {
      dispatch(setCharacterItems([]));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    characterItems,
    characterPages,
    handleChangePage,
    page,
    onClick,
  } as const;
};
