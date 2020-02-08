import * as helpers from "../helpers";

describe("filter artworks by title", () => {
  let fakeArtworks;
  beforeEach(() => {
    fakeArtworks = [
      { artId: 123, artworkTitle: "One Two Three" },
      { artId: 321, artworkTitle: "Three Two One" },
      { artId: 456, artworkTitle: "Four Five Six" },
      { artId: 789, artworkTitle: "Seven Eight Nine" }
    ];
  });

  it("returns all artworks when search is falsy", () => {
    const filtered = helpers.filterArtworksByTitle(fakeArtworks, null);
    expect(filtered).toBe(fakeArtworks);
  });

  it('filters artworks by the "artworkTitle" property', () => {
    const filtered = helpers.filterArtworksByTitle(fakeArtworks, "One");
    expect(filtered.length).toBe(2);
    const filteredIds = filtered.map(artwork => artwork.artId);
    expect(filteredIds).toContain(123);
    expect(filteredIds).toContain(321);
  });

  it("is case insensitive", () => {
    const filtered = helpers.filterArtworksByTitle(fakeArtworks, "fIVe");
    expect(filtered.length).toBe(1);
    expect(filtered[0].artId).toBe(456);
  });
});

describe("get favorites map from local storage", () => {
  it("returns a map of the favorites saved in local storage", () => {
    localStorage.setItem("favorites", "123,456,789");
    const favoritesMap = helpers.getFavoritesMapFromLocalStorage();
    expect(favoritesMap["123"]).toBe(true);
    expect(favoritesMap["456"]).toBe(true);
    expect(favoritesMap["789"]).toBe(true);
    expect(favoritesMap["911"]).toBe(undefined);
  });

  it("returns an empty object if favorites is empty", () => {
    localStorage.setItem("favorites", "");
    const favoritesMap = helpers.getFavoritesMapFromLocalStorage();
    expect(favoritesMap).toEqual({});
  });
});

describe("write favorites to local storage", () => {
  it("should write a favorites map to local storage", () => {
    const favoritesMap = { "987": true, "654": true };
    helpers.writeFavoritesToLocalStorage(favoritesMap);
    const result = localStorage.getItem("favorites").split(",");
    expect(result).toContain("987");
    expect(result).toContain("654");
  });

  it('should only write items that have "value: true" to local storage ', () => {
    const favoritesMap = { "808": true, "909": false, "101": "" };
    helpers.writeFavoritesToLocalStorage(favoritesMap);
    const result = localStorage.getItem("favorites").split(",");
    expect(result).toContain("808");
    expect(result).not.toContain("909");
    expect(result).not.toContain("101");
  });
});
