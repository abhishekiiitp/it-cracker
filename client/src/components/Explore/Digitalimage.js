import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Digitalimage=()=>{

    const[addItem,setAddItem]=useState([]);
    const addNote=(comment)=>{
        //alert('i m clicked');
        setAddItem((prevData)=>{
            return [...prevData,comment];
        })
        console.log(comment);
    }

    const onDelete=(id)=>{
        setAddItem((oldData)=>oldData.filter((currdata,indx)=>{
            return indx!==id;
        }))
    }
    return(


        <>
        <div className="top_img">
         <div id="by">
        <div id="heading">Interview Question for Digital Image Processing
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="Define Image?" 
        answer="An Image may be defined as a two dimensional function f (x,y) where x & y are spatial (plane) coordinates, and the amplitude of f at any pair of coordinates (x,y) is called intensity or gray level of the image at that point. When x,y and the amplitude values of f are all finite, discrete quantities we call the image as Digital Image."

        />

       <Question 
        question="Define Image Sampling?" 
        answer="Digitization of spatial coordinates (x,y) is called Image Sampling. To be suitable for computer processing, an image function f(x,y) must be digitized both spatially and in magnitude."

        />
        
       <Question 
        question=" Define Quantization ?" 
        answer="Digitizing the amplitude values is called Quantization. Quality of digital image is determined to a large degree by the number of samples and discrete gray levels used in sampling and quantization."

        />
        
       <Question 
        question="What Is Dynamic Range?" 
        answer="The range of values spanned by the gray scale is called dynamic range of an image. Image will have high contrast, if the dynamic range is high and image will have dull washed out gray look if the dynamic range is low."

        />
        
       <Question 
        question="Define Mach Band Effect?" 
        answer="The spatial interaction of Luminance from an object and its surround creates a Phenomenon called the mach band effect."

        />
        
       <Question 
        question="Define Brightness?" 
        answer="Brightness of an object is the perceived luminance of the surround. Two objects with different surroundings would have identical luminance but different brightness."

        />
        
       <Question 
        question=" Define Tapered Quantization?" 
        answer="If gray levels in a certain range occur frequently while others occurs rarely, the quantization levels are finely spaced in this range and coarsely spaced outside of it.This method is sometimes called Tapered Quantization."

        />
        
       <Question 
        question="What Do You Meant By Gray Level?" 
        answer="Gray level refers to a scalar measure of intensity that ranges from black to grays and finally to white."

        />
        
       <Question 
        question="Define Resolutions?" 
        answer="Resolution is defined as the smallest number of discernible detail in an image. Spatial resolution is the smallest discernible detail in an image and gray level resolution refers to the smallest discernible change is gray level."

        />
        
       <Question 
        question="Write The M X N Digital Image In Compact Matrix Form?" 
        answer="f(x,y )= f(0,0) f(0,1)………………f(0,N-1)"
        answer1="f(1,0) f(1,1)………………f(1,N-1)   .   .    ."
        answer2="f(M-1) f(M-1,1)…………f(M-1,N-1)"
        flag="1"

        />
        
       <Question 
        question="Write The Expression To Find The Number Of Bits To Store A Digital Image?" 
        answer="The number of bits required to store a digital image is"
        answer1="b=M X N X k"
        answer2="When M=N, this equation becomes"
        answer3="b=N^2k"
        flag="1"
        />
        
       <Question 
        question=" What Do You Meant By Zooming Of Digital Images?" 
        answer="Zooming may be viewed as over sampling. It involves the creation of new pixel locations and the assignment of gray levels to those new locations.

"

        />
        
       <Question 
        question="What Do You Meant By Shrinking Of Digital Images?" 
        answer="Shrinking may be viewed as under sampling. To shrink an image by one half, we delete every row and column. To reduce possible aliasing effect, it is a good idea to blue an image slightly before shrinking it."

        />
        
       <Question 
        question="Define The Term Radiance?" 
        answer="Radiance is the total amount of energy that flows from the light source, and it is usually measured in watts (w)."

        />
        
       <Question 
        question=" Define The Term Luminance?" 
        answer="Luminance measured in lumens (lm), gives a measure of the amount of energy an observer perceiver from a light source."

        />
        
       <Question 
        question="What Is Image Transform?" 
        answer="An image can be expanded in terms of a discrete set of basis arrays called basis images. Unitary matrices can generate these basis images. Alternatively, a given NXN image can be viewed as an N^2X1 vectors. An image transform provides a set of coordinates or basis vectors for vector space."

        />
        
       <Question 
        question="What Are The Applications Of Transform?" 
        answer="To reduce band width"
        answer1="To reduce redundancy"
        answer2="To extract feature."
        flag="1"

        />
        
       <Question 
        question="Give The Conditions For Perfect Transform?" 
        answer="Transpose of matrix = Inverse of a matrix. Orthoganality."

        />
        
       <Question 
        question="What Are The Properties Of Unitary Transform?" 
        answer="Determinant and the Eigen values of a unitary matrix have unity magnitude"
        answer1="The entropy of a random vector is preserved under a unitary Transformation"
        answer2="Since the entropy is a measure of average information, this means information is preserved under a unitary transformation."
        flag="1"

        />
        
       <Question 
        question="Write The Expression Of One-dimensional Discrete Fourier Transforms?" 
        answer="Forward transform"
        answer1="The sequence of x(n) is given by x(n) = { x0,x1,x2,… xN-1}."
        answer2="X(k) = (n=0 to N-1) _ x(n) exp(-j 2* pi* nk/N) ; k= 0,1,2,…N-1"
        answer3="Reverse transforms"
        answer4="X(n) = (1/N) (k=0 to N-1) _ x(k) exp(-j 2* pi* nk/N) ; n= 0,1,2,…N-1"
        flag="1"

        />
        
       <Question 
        question=" Properties Of Twiddle Factor?" 
        answer="1. Periodicity"
        answer1="WN^(K+N)= WN^K"
        answer2="2. Symmetry"
        answer3="WN^(K+N/2)= -WN^K"
        flag="1"

        />
        
       <Question 
        question="Give The Properties Of One-dimensional Dft?" 
        answer="The DFT and unitary DFT matrices are symmetric."
        answer1="The extensions of the DFT and unitary DFT of a sequence and their inverse transforms are periodic with period N."
        answer2="The DFT or unitary DFT of a real sequence is conjugate symmetric about N/2."
        flag="1"

        />
        
       <Question 
        question="Give The Properties Of Two-dimensional Dft?" 
        answer="Symmetric"
        answer1="Periodic extensions"
        answer2="Sampled Fourier transform"
        answer3="Conjugate symmetry."
        flag="1"

        />
        
       <Question 
        question=" What Is Cosine Transform?" 
        answer="The NXN cosine transform c(k) is called the discrete cosine transform and is defined as"
        answer1="C(k) = 1/_N , k=0, 0 _ n _ N-1 = _ (2/N) cos (pi (2n+1)/2N 1_ k _ N-1, 0_ n _ N-1"
        flag="1"

        />
        
       <Question 
        question="Write The Properties Of Cosine Transform?" 
        answer="Real & orthogonal."
        answer1="Fast transform."
        answer2="Has excellent energy compaction for highly correlated data"
        flag="1"

        />
        
       <Question 
        question="Write The Properties Of Sine Transform?" 
        answer="Real, symmetric and orthogonal."
        answer1="Not the imaginary part of the unitary DFT."
        answer2="Fast transform."
        flag="1"

        />
        
       <Question 
        question="Write The Properties Of Hadamard Transform?" 
        answer="Hadamard transform contains any one value."
        answer1="No multiplications are required in the transform calculations."
        answer2="The no: of additions or subtractions required can be reduced from N^2 to Nlog2N"
        answer3="Very good energy compaction for highly correlated images."
        flag="1"

        />
        
       <Question 
        question="Define Haar Transform?" 
        answer="The Haar functions are defined on a continuous interval Xe [0,1] and for K=0,1,……. N-1.Where N=2^n. The integer k can be uniquely decomposed as K=2^P+Q-1."

        />
        
       <Question 
        question="Write The Expression For Hadamard Transforms?" 
        answer="Hadamard transform matrices Hn are NXN matrices where N=2^n , n= 1,2,3,… is defined as Hn= Hn-1 * H1 = H1* Hn-1 = 1/ _ 2 Hn-1 Hn-1"
        answer1="H2 = 1 1"
        answer2="1 –1"
        flag="1"
        />
        
       <Question 
        question="What Are The Properties Of Haar Transform?" 
        answer="Haar transform is real and orthogonal."
        answer1="Haar transform is a very fast transform"
        answer2="Haar transform has very poor energy compaction for images"
        answer3="The basic vectors of Haar matrix sequency ordered."
        flag="1"

        />
        
       <Question 
        question="What Are The Properties Of Slant Transform?" 
        answer="Slant transform is real and orthogonal."
        answer1="Slant transform is a fast transform"
        answer2="Slant transform has very good energy compaction for images"
        answer3="The basic vectors of Slant matrix are not sequency ordered."
        flag="1"

        />
        
       <Question 
        question=" Define Of Kl Transform?" 
        answer="KL Transform is an optimal in the sense that it minimizes the mean square error between the vectors X and their approximations X^. Due to this idea of using the Eigenvectors corresponding to largest Eigen values. It is also known as principal component transform."

        />
        
       <Question 
        question="Justify That Klt Is An Optimal Transform?" 
        answer="Since mean square error of reconstructed image and original image is minimum and the mean value of transformed image is zero so that uncorrelated."

        />
        
       <Question 
        question="Explain The Term Digital Image?" 
        answer="The digital image is an array of real or complex numbers that is represented by a finite no of bits."

        />
        
       <Question 
        question=" Write Any Four Applications Of Dip?" 
        answer="Remote sensing"
        answer1="Image transmission and storage for business application"
        answer2="Medical imaging"
        answer3="Astronomy"
        flag="1"

        />
        
       <Question 
        question="What Is The Effect Of Mach Band Pattern?" 
        answer="The intensity or the brightness pattern perceive a darker stribe in region D and brighter stribe in region B.This effect is called Mach band pattern or effect."

        />
        
       <Question 
        question="Write Down The Properties Of 2d Fourier Transform?Question NUmber 1" 
        answer="Separability"
        answer1="Translation"
        answer2="Periodicity and Conjugate property"
        answer3="Distributivity and scaling"
        answer4="Average value"
        answer5="Convolution and Correlation"
        flag="1"

        />
        
       <Question 
        question="Obtain The Hadamard Transformation For N = 4?" 
        answer="  N = 4 = 2n"
        answer1="  => n = 2"
        flag="1"

        />
        
       <Question 
        question="Write Down The Properties Of Haar Transform?" 
        answer="Real and orthogona"
        answer1="Very fast transform"
        answer2="Basis vectors are sequentially ordered"
        answer3="Has fair energy compaction for image"
        answer4="Useful in feature extraction,image coding and image analysis problem"
        flag="1"

        />
        
       <Question 
        question="What Is Image Enhancement?" 
        answer="Image enhancement is to process an image so that the output is more suitable for specific application."

        />
        
       <Question 
        question="Name The Categories Of Image Enhancement And Explain?" 
        answer="The categories of Image Enhancement are"
        answer1="->Spatial domain"
        answer2="->Frequency domain Spatial domain: It refers to the image plane, itself and it is based on direct manipulation of pixels of an image."
        answer3=""
        flag="1"

        />
        
       <Question 
        question="What Do You Mean By Point Processing?" 
        answer="Image enhancement at any Point in an image depends only on the gray level at that point is often referred to as Point processing."

        />
        
       <Question 
        question="Explain Mask Or Kernels?" 
        answer="A Mask is a small two-dimensional array, in which the value of the mask coefficient determines the nature of the process, such as image sharpening."

        />
        
       <Question 
        question="What Is Image Negatives?" 
        answer="The negative of an image with gray levels in the range [0, L-1] is obtained by using the negative transformation, which is given by the expression."
        answer1="s = L-1-r"
        answer2="Where s is output pixel."
        answer3="r is input pixel."
        flag="1"

        />
        
       <Question 
        question="Define Histogram?" 
        answer="The histogram of a digital image with gray levels in the range [0, L-1] is a discrete function h (rk) = nk, where rk is the kth gray level and nk is the number of pixels in the image having gray level rk."

        />
        
       <Question 
        question="Define Derivative Filter?" 
        answer="For a function f (x, y), the gradient f at co-ordinate (x, y) is defined as the 
        vector_f = _f/_x"
        answer1="_f/_y"
        answer2="_f = mag (_f) = {[(_f/_x) 2 +(_f/_y) 2 ]} ½"
        flag="1"

        />
       <Question 
        question="Explain Spatial Filtering?" 
        answer="Spatial filtering is the process of moving the filter mask from point to point in an image. For linear spatial filter, the response is given by a sum of products of the filter coefficients, and the corresponding image pixels in the area spanned by the filter mask."

        />
       <Question 
        question=" Define Averaging Filters?" 
        answer="The output of a smoothing, linear spatial filter is the average of the pixels contain in the neighborhood of the filter mask. These filters are called averaging filters."

        />
       <Question 
        question="What Is A Median Filter?" 
        answer="The median filter replaces the value of a pixel by the median of the gray levels in the neighborhood of that pixel."

        />
       <Question 
        question="What Is Maximum Filter And Minimum Filter?" 
        answer="The 100th percentile is maximum filter is used in finding brightest points in an image. The 0th percentile filter is minimum filter used for finding darkest points in an image."

        />

       {/* Question-answer part end  */}

        <Comment passComment={addNote} />
       
        {
            addItem.map((val,index)=>{
                return(
                    <Note 
                    key={index}
                    id={index}
                    name={val.name}
                    content={val.content}
                    deleteItem={onDelete}
                    />
                )
            })
        }
        </>
    )
}
export default Digitalimage;