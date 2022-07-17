import { useEffect, useState } from "react";

type DropDownProps = {
  genres: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  genreSelection: Function;
};

export const DropDown: React.FC<DropDownProps> = ({
  genres,
  genreSelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onClickHandler = (genre: string): void => {
    genreSelection(genre);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {genres.map(
          (genre: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(genre);
                }}
              >
                {genre}
              </p>
            );
          }
        )}
      </div>
    </>
  );
};